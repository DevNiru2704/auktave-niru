# AUKTAVE 2026 - Finance System Design

## Overview
A centralized financial management dashboard for AUKTAVE 2026 (university tech fest).
Corporate admin dashboard style, built with Google Apps Script backend and Google Sheets as database.

## Database Schema (Google Sheets)

### 1. Income Sheet
| Column | Type |
|--------|------|
| Date | Date |
| Source Type | Enum: Sponsorship / AUK Funding / Other |
| Sponsor Name | Text |
| Sponsorship Tier | Enum: Title / Powered / Sponsored / Co-Sponsored / Partner / In-Kind |
| Amount Committed | Number |
| Amount Received | Number |
| Pending Amount | Number (calculated) |
| Payment Mode | Enum: Bank Transfer / Cash / Cheque / UPI / Other |
| Status | Enum: Pending / Partial / Received / Overdue |
| Invoice Link | URL (Google Drive) |
| Handled By | Text |
| Remarks | Text |

### 2. Expenses Sheet
| Column | Type |
|--------|------|
| Expense ID | Auto-generated (EXP-0001) |
| Date | Date |
| Committee | Text |
| Event | Text |
| Category | Enum: Production / Marketing / Prize / Logistics / Food / Tech / Misc |
| Description | Text |
| Vendor Name | Text |
| Amount Estimated | Number |
| Amount Approved | Number |
| Amount Spent | Number |
| Payment Status | Enum: Pending / Approved / Paid / Reimbursed |
| Payment Mode | Text |
| Invoice Link | URL |
| Approved By | Text |
| Remarks | Text |

### 3. Committees Sheet
| Column | Type |
|--------|------|
| Committee Name | Text |
| Budget Required | Number |
| Budget Approved | Number |
| Sponsorship Allocated | Number |
| Total Available Budget | Number |
| Total Spent | Number |
| Remaining Budget | Number (calculated) |
| Utilization % | Number (calculated) |

### 4. Events Sheet
| Column | Type |
|--------|------|
| Event Name | Text |
| Category | Text |
| Budget Required | Number |
| Budget Approved | Number |
| Sponsorship Assigned | Number |
| Total Budget Available | Number |
| Total Spent | Number |
| Remaining Budget | Number |

### 5. Vendors Sheet
| Column | Type |
|--------|------|
| Vendor Name | Text |
| Service Type | Text |
| Committee | Text |
| Total Amount | Number |
| Paid Amount | Number |
| Pending Amount | Number |
| Due Date | Date |
| Contact Info | Text |
| Status | Enum: Active / Paid / Overdue / On Hold |

### 6. Approvals Sheet
| Column | Type |
|--------|------|
| Request ID | Auto-generated (REQ-0001) |
| Request Date | Date |
| Requested By | Text |
| Committee | Text |
| Purpose | Text |
| Amount Requested | Number |
| Amount Approved | Number |
| Approved By | Text |
| Status | Enum: Pending / Approved / Rejected / Escalated |
| Notes | Text |

### 7. Invoices Sheet
| Column | Type |
|--------|------|
| Invoice ID | Auto-generated (INV-0001) |
| Linked Expense ID / Income Reference | Text |
| File Link | URL (Google Drive) |
| Uploaded By | Text |
| Date | Date |
| Verification Status | Enum: Pending / Verified / Rejected |

## API Endpoints (Google Apps Script Web App)

### Dashboard
- `getDashboardData()` → Returns aggregated KPIs and chart data

### Income
- `getIncome()` → All income records
- `addIncome(data)` → Insert new income row
- `updateIncome(id, data)` → Update income row by row index

### Expenses
- `getExpenses()` → All expense records
- `addExpense(data)` → Insert new expense with auto-generated EXP-ID
- `updateExpense(id, data)` → Update expense row
- `deleteExpense(id)` → Delete expense row

### Masters
- `getCommittees()` → All committee records
- `getEvents()` → All event records
- `getVendors()` → All vendor records

### Approvals
- `getApprovals()` → All approval records
- `addApproval(data)` → Insert new approval request with auto-generated REQ-ID
- `updateApproval(id, data)` → Update approval status

### Invoices
- `getInvoices()` → All invoice records
- `addInvoice(data)` → Insert new invoice record with auto-generated INV-ID

## UI Architecture

### Pages
1. **Dashboard** - KPI cards + 3 Chart.js visualizations
2. **Income** - Add form + searchable/filterable table with inline editing
3. **Expenses** - Add form + filterable table with edit/delete
4. **Committees** - Budget vs spent table with progress bars
5. **Events** - Event-wise financial tracking table
6. **Vendors** - Vendor list with payment status
7. **Approvals** - Request form + status tracking
8. **Invoices** - Invoice list with Drive links
9. **Analytics** - Comprehensive charts (pie, bar, line, doughnut)

### Design System
- Color palette: Dark navy #0f172a sidebar, white content, #3b82f6 primary accent
- Cards with subtle shadow and border
- Clean sans-serif typography (Inter/system)
- Corporate minimal style
- Responsive sidebar (collapsible)
- Hover effects on all interactive elements
- Status badges with color coding

## File Structure
```
auktave-finance/
├── backend.gs          # Complete Google Apps Script code
├── index.html          # Complete frontend (HTML + Tailwind + JS)
└── README.md           # Deployment guide
```
