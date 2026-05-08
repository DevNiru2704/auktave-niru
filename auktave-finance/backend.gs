/**
 * ============================================
 * AUKTAVE 2026 - Financial Management System
 * Google Apps Script Backend API
 * ============================================
 * Deploy as Web App with access to anyone
 * ============================================
 */

// ─── CONFIGURATION ───
const SPREADSHEET_ID = '18Xz7Z4HqYWFEfM-Xzfh__GB38Rzwnvvs0REqIx-CBW0'; // Replace after creating sheet
const SHEET_NAMES = {
  INCOME: 'Income',
  EXPENSES: 'Expenses',
  COMMITTEES: 'Committees',
  EVENTS: 'Events',
  VENDORS: 'Vendors',
  APPROVALS: 'Approvals',
  INVOICES: 'Invoices'
};

// ─── WEB APP ENTRY POINTS ───

function doGet(e) {
  const action = e.parameter.action || 'dashboard';
  
  try {
    let result;
    
    switch(action) {
      case 'dashboard':
        result = getDashboardData();
        break;
      case 'income':
        result = getIncome();
        break;
      case 'expenses':
        result = getExpenses();
        break;'
      case 'committees':
        result = getCommittees();
        break;
      case 'events':
        result = getEvents();
        break;
      case 'vendors':
        result = getVendors();
        break;
      case 'approvals':
        result = getApprovals();
        break;
      case 'invoices':
        result = getInvoices();
        break;
      case 'analytics':
        result = getAnalytics();
        break;
      default:
        throw new Error('Invalid action: ' + action);
    }
    
    return jsonResponse(result);
    
  } catch(error) {
    return jsonResponse({ error: error.toString() }, true);
  }
}

function doPost(e) {
  // Handle CORS preflight
  if (e.parameter.method === 'OPTIONS') {
    return jsonResponse({});
  }
  
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    
    if (!action) {
      throw new Error('No action specified');
    }
    
    let result;
    
    switch(action) {
      // Income
      case 'addIncome':
        validateRequired(data, ['date', 'sourceType', 'sponsorName', 'amountCommitted']);
        result = addIncome(data);
        break;
      case 'updateIncome':
        validateRequired(data, ['id']);
        result = updateIncome(data.id, data);
        break;
        
      // Expenses
      case 'addExpense':
        validateRequired(data, ['date', 'committee', 'category', 'description', 'amountEstimated']);
        result = addExpense(data);
        break;
      case 'updateExpense':
        validateRequired(data, ['id']);
        result = updateExpense(data.id, data);
        break;
      case 'deleteExpense':
        validateRequired(data, ['id']);
        result = deleteExpense(data.id);
        break;
        
      // Approvals
      case 'addApproval':
        validateRequired(data, ['requestedBy', 'committee', 'purpose', 'amountRequested']);
        result = addApproval(data);
        break;
      case 'updateApproval':
        validateRequired(data, ['id']);
        result = updateApproval(data.id, data);
        break;
        
      // Invoices
      case 'addInvoice':
        validateRequired(data, ['linkedReference', 'fileLink', 'uploadedBy']);
        result = addInvoice(data);
        break;
        
      // Committees
      case 'addCommittee':
        validateRequired(data, ['committeeName']);
        result = addCommittee(data);
        break;
        
      // Events
      case 'addEvent':
        validateRequired(data, ['eventName']);
        result = addEvent(data);
        break;
        
      // Vendors
      case 'addVendor':
        validateRequired(data, ['vendorName', 'serviceType', 'totalAmount']);
        result = addVendor(data);
        break;
        
      default:
        throw new Error('Invalid action: ' + action);
    }
    
    return jsonResponse(result);
    
  } catch(error) {
    return jsonResponse({ error: error.toString() }, true);
  }
}

function doOptions() {
  return jsonResponse({});
}

// ─── RESPONSE UTILITY ───

function jsonResponse(data, isError) {
  const payload = isError
    ? { success: false, error: typeof data === 'object' && data.error ? data.error : String(data) }
    : { success: true, data: data };
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

// ─── VALIDATION ───

function validateRequired(data, fields) {
  fields.forEach(field => {
    if (data[field] === undefined || data[field] === null || data[field] === '') {
      throw new Error('Missing required field: ' + field);
    }
  });
}

// ─── SHEET UTILITIES ───

function getSheet(name) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    // Add headers based on sheet type
    addHeaders(sheet, name);
  }
  return sheet;
}

function addHeaders(sheet, name) {
  const headers = {
    'Income': ['Date', 'Source Type', 'Sponsor Name', 'Sponsorship Tier', 'Amount Committed', 'Amount Received', 'Pending Amount', 'Payment Mode', 'Status', 'Invoice Link', 'Handled By', 'Remarks'],
    'Expenses': ['Expense ID', 'Date', 'Committee', 'Event', 'Category', 'Description', 'Vendor Name', 'Amount Estimated', 'Amount Approved', 'Amount Spent', 'Payment Status', 'Payment Mode', 'Invoice Link', 'Approved By', 'Remarks'],
    'Committees': ['Committee Name', 'Budget Required', 'Budget Approved', 'Sponsorship Allocated', 'Total Available Budget', 'Total Spent', 'Remaining Budget', 'Utilization %'],
    'Events': ['Event Name', 'Category', 'Budget Required', 'Budget Approved', 'Sponsorship Assigned', 'Total Budget Available', 'Total Spent', 'Remaining Budget'],
    'Vendors': ['Vendor Name', 'Service Type', 'Committee', 'Total Amount', 'Paid Amount', 'Pending Amount', 'Due Date', 'Contact Info', 'Status'],
    'Approvals': ['Request ID', 'Request Date', 'Requested By', 'Committee', 'Purpose', 'Amount Requested', 'Amount Approved', 'Approved By', 'Status', 'Notes'],
    'Invoices': ['Invoice ID', 'Linked Reference', 'File Link', 'Uploaded By', 'Date', 'Verification Status']
  };
  
  if (headers[name]) {
    sheet.getRange(1, 1, 1, headers[name].length).setValues([headers[name]]);
    sheet.getRange(1, 1, 1, headers[name].length)
      .setFontWeight('bold')
      .setBackground('#4285f4')
      .setFontColor('white');
  }
}

function getSheetData(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  
  const headers = data[0];
  const rows = [];
  
  for (let i = 1; i < data.length; i++) {
    const row = {};
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = data[i][j] !== undefined ? data[i][j] : '';
    }
    row._rowIndex = i + 1; // 1-based row index for updates
    rows.push(row);
  }
  
  return rows;
}

function getNextId(sheet, prefix, idColumnIndex) {
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return prefix + '0001';
  
  let maxNum = 0;
  for (let i = 1; i < data.length; i++) {
    const id = data[i][idColumnIndex] ? String(data[i][idColumnIndex]) : '';
    if (id && id.startsWith(prefix)) {
      const num = parseInt(id.replace(prefix, ''), 10);
      if (!isNaN(num) && num > maxNum) maxNum = num;
    }
  }
  
  const nextNum = maxNum + 1;
  return prefix + String(nextNum).padStart(4, '0');
}

// ─── ID GENERATORS ───

function getNextExpenseId() {
  return getNextId(getSheet(SHEET_NAMES.EXPENSES), 'EXP-', 0);
}

function getNextRequestId() {
  return getNextId(getSheet(SHEET_NAMES.APPROVALS), 'REQ-', 0);
}

function getNextInvoiceId() {
  return getNextId(getSheet(SHEET_NAMES.INVOICES), 'INV-', 0);
}

// ─── DASHBOARD ───

function getDashboardData() {
  const incomeSheet = getSheet(SHEET_NAMES.INCOME);
  const expenseSheet = getSheet(SHEET_NAMES.EXPENSES);
  const committeeSheet = getSheet(SHEET_NAMES.COMMITTEES);
  const vendorSheet = getSheet(SHEET_NAMES.VENDORS);
  const approvalSheet = getSheet(SHEET_NAMES.APPROVALS);
  
  const incomeData = getSheetData(incomeSheet);
  const expenseData = getSheetData(expenseSheet);
  const committeeData = getSheetData(committeeSheet);
  const vendorData = getSheetData(vendorSheet);
  const approvalData = getSheetData(approvalSheet);
  
  // ─── KPI Calculations ───
  const totalSponsorshipCommitted = incomeData
    .filter(r => r['Source Type'] === 'Sponsorship')
    .reduce((sum, r) => sum + (parseFloat(r['Amount Committed']) || 0), 0);
  
  const totalSponsorshipReceived = incomeData
    .filter(r => r['Source Type'] === 'Sponsorship')
    .reduce((sum, r) => sum + (parseFloat(r['Amount Received']) || 0), 0);
  
  const totalAukFunding = incomeData
    .filter(r => r['Source Type'] === 'AUK Funding')
    .reduce((sum, r) => sum + (parseFloat(r['Amount Received']) || 0), 0);
  
  const totalIncomeReceived = totalSponsorshipReceived + totalAukFunding;
  
  const totalBudgetApproved = committeeData
    .reduce((sum, r) => sum + (parseFloat(r['Budget Approved']) || 0), 0);
  
  const totalExpenses = expenseData
    .reduce((sum, r) => sum + (parseFloat(r['Amount Spent']) || 0), 0);
  
  const totalEstimated = expenseData
    .reduce((sum, r) => sum + (parseFloat(r['Amount Estimated']) || 0), 0);
  
  const remainingBalance = totalIncomeReceived - totalExpenses;
  
  const pendingPayments = vendorData
    .reduce((sum, r) => sum + (parseFloat(r['Pending Amount']) || 0), 0);
  
  const pendingApprovals = approvalData
    .filter(r => r['Status'] === 'Pending')
    .length;
  
  // ─── Expense Distribution by Category ───
  const categoryMap = {};
  expenseData.forEach(r => {
    const cat = r['Category'] || 'Misc';
    categoryMap[cat] = (categoryMap[cat] || 0) + (parseFloat(r['Amount Spent']) || 0);
  });
  const expenseByCategory = Object.entries(categoryMap).map(([label, value]) => ({ label, value }));
  
  // ─── Committee Spending ───
  const committeeSpending = committeeData.map(r => ({
    label: r['Committee Name'] || 'Unknown',
    budget: parseFloat(r['Budget Approved']) || 0,
    spent: parseFloat(r['Total Spent']) || 0,
    remaining: parseFloat(r['Remaining Budget']) || 0
  }));
  
  // ─── Cash Flow Timeline ───
  const monthlyIncome = {};
  const monthlyExpense = {};
  
  incomeData.forEach(r => {
    const date = new Date(r['Date']);
    if (!isNaN(date)) {
      const key = date.toISOString().slice(0, 7); // YYYY-MM
      monthlyIncome[key] = (monthlyIncome[key] || 0) + (parseFloat(r['Amount Received']) || 0);
    }
  });
  
  expenseData.forEach(r => {
    const date = new Date(r['Date']);
    if (!isNaN(date)) {
      const key = date.toISOString().slice(0, 7);
      monthlyExpense[key] = (monthlyExpense[key] || 0) + (parseFloat(r['Amount Spent']) || 0);
    }
  });
  
  const allMonths = [...new Set([...Object.keys(monthlyIncome), ...Object.keys(monthlyExpense)])].sort();
  const cashFlowTimeline = allMonths.map(m => ({
    month: m,
    income: monthlyIncome[m] || 0,
    expense: monthlyExpense[m] || 0
  }));
  
  // ─── Sponsorship Tier Distribution ───
  const tierMap = {};
  incomeData
    .filter(r => r['Source Type'] === 'Sponsorship')
    .forEach(r => {
      const tier = r['Sponsorship Tier'] || 'Unspecified';
      tierMap[tier] = (tierMap[tier] || 0) + (parseFloat(r['Amount Committed']) || 0);
    });
  const sponsorshipTiers = Object.entries(tierMap).map(([label, value]) => ({ label, value }));
  
  // ─── Recent Activity ───
  const recentIncome = incomeData.slice(-5).reverse();
  const recentExpenses = expenseData.slice(-5).reverse();
  
  return {
    kpi: {
      totalBudget: totalBudgetApproved,
      totalSponsorshipCommitted: totalSponsorshipCommitted,
      totalSponsorshipReceived: totalSponsorshipReceived,
      totalIncomeReceived: totalIncomeReceived,
      totalExpenses: totalExpenses,
      totalEstimated: totalEstimated,
      remainingBalance: remainingBalance,
      pendingPayments: pendingPayments,
      pendingApprovals: pendingApprovals,
      expenseCount: expenseData.length,
      incomeCount: incomeData.length
    },
    expenseByCategory: expenseByCategory,
    committeeSpending: committeeSpending,
    cashFlowTimeline: cashFlowTimeline,
    sponsorshipTiers: sponsorshipTiers,
    recentIncome: recentIncome,
    recentExpenses: recentExpenses
  };
}

// ─── INCOME ───

function getIncome() {
  const sheet = getSheet(SHEET_NAMES.INCOME);
  return getSheetData(sheet);
}

function addIncome(data) {
  const sheet = getSheet(SHEET_NAMES.INCOME);
  const pendingAmount = (parseFloat(data.amountCommitted) || 0) - (parseFloat(data.amountReceived) || 0);
  
  const status = pendingAmount <= 0 ? 'Received' : 
                 (parseFloat(data.amountReceived) || 0) > 0 ? 'Partial' : 'Pending';
  
  const row = [
    data.date,
    data.sourceType,
    data.sponsorName,
    data.sponsorshipTier || '',
    parseFloat(data.amountCommitted) || 0,
    parseFloat(data.amountReceived) || 0,
    pendingAmount,
    data.paymentMode || '',
    status,
    data.invoiceLink || '',
    data.handledBy || '',
    data.remarks || ''
  ];
  
  sheet.appendRow(row);
  return { message: 'Income added successfully', pendingAmount: pendingAmount, status: status };
}

function updateIncome(id, data) {
  // id is the row index
  const sheet = getSheet(SHEET_NAMES.INCOME);
  const rowIndex = parseInt(id);
  
  if (isNaN(rowIndex) || rowIndex < 2) {
    throw new Error('Invalid income ID');
  }
  
  const currentData = sheet.getRange(rowIndex, 1, 1, 12).getValues()[0];
  
  const amountCommitted = data.amountCommitted !== undefined ? parseFloat(data.amountCommitted) : currentData[4];
  const amountReceived = data.amountReceived !== undefined ? parseFloat(data.amountReceived) : currentData[5];
  const pendingAmount = amountCommitted - amountReceived;
  
  const status = pendingAmount <= 0 ? 'Received' : amountReceived > 0 ? 'Partial' : 'Pending';
  
  const row = [
    data.date !== undefined ? data.date : currentData[0],
    data.sourceType !== undefined ? data.sourceType : currentData[1],
    data.sponsorName !== undefined ? data.sponsorName : currentData[2],
    data.sponsorshipTier !== undefined ? data.sponsorshipTier : currentData[3],
    amountCommitted,
    amountReceived,
    pendingAmount,
    data.paymentMode !== undefined ? data.paymentMode : currentData[7],
    status,
    data.invoiceLink !== undefined ? data.invoiceLink : currentData[9],
    data.handledBy !== undefined ? data.handledBy : currentData[10],
    data.remarks !== undefined ? data.remarks : currentData[11]
  ];
  
  sheet.getRange(rowIndex, 1, 1, 12).setValues([row]);
  return { message: 'Income updated successfully' };
}

// ─── EXPENSES ───

function getExpenses() {
  const sheet = getSheet(SHEET_NAMES.EXPENSES);
  return getSheetData(sheet);
}

function addExpense(data) {
  const sheet = getSheet(SHEET_NAMES.EXPENSES);
  const expenseId = getNextExpenseId();
  
  const row = [
    expenseId,
    data.date,
    data.committee,
    data.event || '',
    data.category,
    data.description,
    data.vendorName || '',
    parseFloat(data.amountEstimated) || 0,
    parseFloat(data.amountApproved) || 0,
    parseFloat(data.amountSpent) || 0,
    data.paymentStatus || 'Pending',
    data.paymentMode || '',
    data.invoiceLink || '',
    data.approvedBy || '',
    data.remarks || ''
  ];
  
  sheet.appendRow(row);
  return { message: 'Expense added successfully', expenseId: expenseId };
}

function updateExpense(id, data) {
  const sheet = getSheet(SHEET_NAMES.EXPENSES);
  
  // Find by Expense ID or row index
  let rowIndex;
  if (String(id).startsWith('EXP-')) {
    const allData = sheet.getDataRange().getValues();
    for (let i = 1; i < allData.length; i++) {
      if (allData[i][0] === id) {
        rowIndex = i + 1;
        break;
      }
    }
  } else {
    rowIndex = parseInt(id);
  }
  
  if (!rowIndex || rowIndex < 2) {
    throw new Error('Expense not found: ' + id);
  }
  
  const currentData = sheet.getRange(rowIndex, 1, 1, 15).getValues()[0];
  
  const row = [
    currentData[0], // Expense ID (preserve)
    data.date !== undefined ? data.date : currentData[1],
    data.committee !== undefined ? data.committee : currentData[2],
    data.event !== undefined ? data.event : currentData[3],
    data.category !== undefined ? data.category : currentData[4],
    data.description !== undefined ? data.description : currentData[5],
    data.vendorName !== undefined ? data.vendorName : currentData[6],
    data.amountEstimated !== undefined ? parseFloat(data.amountEstimated) : currentData[7],
    data.amountApproved !== undefined ? parseFloat(data.amountApproved) : currentData[8],
    data.amountSpent !== undefined ? parseFloat(data.amountSpent) : currentData[9],
    data.paymentStatus !== undefined ? data.paymentStatus : currentData[10],
    data.paymentMode !== undefined ? data.paymentMode : currentData[11],
    data.invoiceLink !== undefined ? data.invoiceLink : currentData[12],
    data.approvedBy !== undefined ? data.approvedBy : currentData[13],
    data.remarks !== undefined ? data.remarks : currentData[14]
  ];
  
  sheet.getRange(rowIndex, 1, 1, 15).setValues([row]);
  return { message: 'Expense updated successfully' };
}

function deleteExpense(id) {
  const sheet = getSheet(SHEET_NAMES.EXPENSES);
  
  let rowIndex;
  if (String(id).startsWith('EXP-')) {
    const allData = sheet.getDataRange().getValues();
    for (let i = 1; i < allData.length; i++) {
      if (allData[i][0] === id) {
        rowIndex = i + 1;
        break;
      }
    }
  } else {
    rowIndex = parseInt(id);
  }
  
  if (!rowIndex || rowIndex < 2) {
    throw new Error('Expense not found: ' + id);
  }
  
  sheet.deleteRow(rowIndex);
  return { message: 'Expense deleted successfully' };
}

// ─── COMMITTEES ───

function getCommittees() {
  const sheet = getSheet(SHEET_NAMES.COMMITTEES);
  return getSheetData(sheet);
}

function addCommittee(data) {
  const sheet = getSheet(SHEET_NAMES.COMMITTEES);
  const totalAvailable = (parseFloat(data.budgetApproved) || 0) + (parseFloat(data.sponsorshipAllocated) || 0);
  
  const row = [
    data.committeeName,
    parseFloat(data.budgetRequired) || 0,
    parseFloat(data.budgetApproved) || 0,
    parseFloat(data.sponsorshipAllocated) || 0,
    totalAvailable,
    0, // Total Spent (initially 0)
    totalAvailable, // Remaining = Total Available initially
    0 // Utilization %
  ];
  
  sheet.appendRow(row);
  return { message: 'Committee added successfully' };
}

function updateCommitteeSpending(committeeName, amountSpent) {
  const sheet = getSheet(SHEET_NAMES.COMMITTEES);
  const allData = sheet.getDataRange().getValues();
  
  for (let i = 1; i < allData.length; i++) {
    if (allData[i][0] === committeeName) {
      const rowIndex = i + 1;
      const currentSpent = parseFloat(allData[i][5]) || 0;
      const totalAvailable = parseFloat(allData[i][4]) || 0;
      const newSpent = currentSpent + amountSpent;
      const remaining = totalAvailable - newSpent;
      const utilization = totalAvailable > 0 ? (newSpent / totalAvailable) * 100 : 0;
      
      sheet.getRange(rowIndex, 6, 1, 3).setValues([[newSpent, remaining, utilization]]);
      break;
    }
  }
}

// ─── EVENTS ───

function getEvents() {
  const sheet = getSheet(SHEET_NAMES.EVENTS);
  return getSheetData(sheet);
}

function addEvent(data) {
  const sheet = getSheet(SHEET_NAMES.EVENTS);
  const totalAvailable = (parseFloat(data.budgetApproved) || 0) + (parseFloat(data.sponsorshipAssigned) || 0);
  
  const row = [
    data.eventName,
    data.category || '',
    parseFloat(data.budgetRequired) || 0,
    parseFloat(data.budgetApproved) || 0,
    parseFloat(data.sponsorshipAssigned) || 0,
    totalAvailable,
    0, // Total Spent
    totalAvailable // Remaining
  ];
  
  sheet.appendRow(row);
  return { message: 'Event added successfully' };
}

// ─── VENDORS ───

function getVendors() {
  const sheet = getSheet(SHEET_NAMES.VENDORS);
  return getSheetData(sheet);
}

function addVendor(data) {
  const sheet = getSheet(SHEET_NAMES.VENDORS);
  const pending = (parseFloat(data.totalAmount) || 0) - (parseFloat(data.paidAmount) || 0);
  
  const status = pending <= 0 ? 'Paid' : data.dueDate && new Date(data.dueDate) < new Date() ? 'Overdue' : 'Active';
  
  const row = [
    data.vendorName,
    data.serviceType || '',
    data.committee || '',
    parseFloat(data.totalAmount) || 0,
    parseFloat(data.paidAmount) || 0,
    pending,
    data.dueDate || '',
    data.contactInfo || '',
    status
  ];
  
  sheet.appendRow(row);
  return { message: 'Vendor added successfully' };
}

// ─── APPROVALS ───

function getApprovals() {
  const sheet = getSheet(SHEET_NAMES.APPROVALS);
  return getSheetData(sheet);
}

function addApproval(data) {
  const sheet = getSheet(SHEET_NAMES.APPROVALS);
  const requestId = getNextRequestId();
  const requestDate = new Date().toISOString().split('T')[0];
  
  const row = [
    requestId,
    requestDate,
    data.requestedBy,
    data.committee,
    data.purpose,
    parseFloat(data.amountRequested) || 0,
    0, // Amount Approved (initially 0)
    '', // Approved By
    'Pending',
    data.notes || ''
  ];
  
  sheet.appendRow(row);
  return { message: 'Approval request submitted', requestId: requestId };
}

function updateApproval(id, data) {
  const sheet = getSheet(SHEET_NAMES.APPROVALS);
  
  let rowIndex;
  if (String(id).startsWith('REQ-')) {
    const allData = sheet.getDataRange().getValues();
    for (let i = 1; i < allData.length; i++) {
      if (allData[i][0] === id) {
        rowIndex = i + 1;
        break;
      }
    }
  } else {
    rowIndex = parseInt(id);
  }
  
  if (!rowIndex || rowIndex < 2) {
    throw new Error('Approval request not found: ' + id);
  }
  
  const currentData = sheet.getRange(rowIndex, 1, 1, 10).getValues()[0];
  
  const row = [
    currentData[0], // Request ID
    currentData[1], // Request Date
    currentData[2], // Requested By
    data.committee !== undefined ? data.committee : currentData[3],
    data.purpose !== undefined ? data.purpose : currentData[4],
    data.amountRequested !== undefined ? parseFloat(data.amountRequested) : currentData[5],
    data.amountApproved !== undefined ? parseFloat(data.amountApproved) : currentData[6],
    data.approvedBy !== undefined ? data.approvedBy : currentData[7],
    data.status !== undefined ? data.status : currentData[8],
    data.notes !== undefined ? data.notes : currentData[9]
  ];
  
  sheet.getRange(rowIndex, 1, 1, 10).setValues([row]);
  return { message: 'Approval updated successfully' };
}

// ─── INVOICES ───

function getInvoices() {
  const sheet = getSheet(SHEET_NAMES.INVOICES);
  return getSheetData(sheet);
}

function addInvoice(data) {
  const sheet = getSheet(SHEET_NAMES.INVOICES);
  const invoiceId = getNextInvoiceId();
  const uploadDate = new Date().toISOString().split('T')[0];
  
  const row = [
    invoiceId,
    data.linkedReference,
    data.fileLink,
    data.uploadedBy,
    uploadDate,
    data.verificationStatus || 'Pending'
  ];
  
  sheet.appendRow(row);
  return { message: 'Invoice added successfully', invoiceId: invoiceId };
}

// ─── ANALYTICS ───

function getAnalytics() {
  const dashboardData = getDashboardData();
  
  const incomeSheet = getSheet(SHEET_NAMES.INCOME);
  const expenseSheet = getSheet(SHEET_NAMES.EXPENSES);
  const vendorSheet = getSheet(SHEET_NAMES.VENDORS);
  
  const incomeData = getSheetData(incomeSheet);
  const expenseData = getSheetData(expenseSheet);
  const vendorData = getSheetData(vendorSheet);
  
  // Source-wise income breakdown
  const sourceMap = {};
  incomeData.forEach(r => {
    const source = r['Source Type'] || 'Other';
    sourceMap[source] = (sourceMap[source] || 0) + (parseFloat(r['Amount Received']) || 0);
  });
  const incomeBySource = Object.entries(sourceMap).map(([label, value]) => ({ label, value }));
  
  // Payment status distribution
  const paymentStatusMap = {};
  expenseData.forEach(r => {
    const status = r['Payment Status'] || 'Unknown';
    paymentStatusMap[status] = (paymentStatusMap[status] || 0) + 1;
  });
  const paymentStatusDist = Object.entries(paymentStatusMap).map(([label, value]) => ({ label, value }));
  
  // Top vendors by spending
  const topVendors = vendorData
    .map(r => ({
      name: r['Vendor Name'] || 'Unknown',
      total: parseFloat(r['Total Amount']) || 0,
      paid: parseFloat(r['Paid Amount']) || 0,
      pending: parseFloat(r['Pending Amount']) || 0
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);
  
  return {
    ...dashboardData,
    incomeBySource: incomeBySource,
    paymentStatusDist: paymentStatusDist,
    topVendors: topVendors
  };
}

// ─── BATCH OPERATIONS ───

function batchUpdate(data) {
  const results = [];
  
  if (data.operations && Array.isArray(data.operations)) {
    data.operations.forEach(op => {
      try {
        let result;
        switch(op.action) {
          case 'addIncome': result = addIncome(op.data); break;
          case 'addExpense': result = addExpense(op.data); break;
          case 'addApproval': result = addApproval(op.data); break;
          case 'addInvoice': result = addInvoice(op.data); break;
          default: throw new Error('Unknown batch action: ' + op.action);
        }
        results.push({ success: true, action: op.action, result: result });
      } catch(e) {
        results.push({ success: false, action: op.action, error: e.toString() });
      }
    });
  }
  
  return { results: results };
}