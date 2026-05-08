# AUKTAVE 2026 - Financial Management System

## Complete Deployment Guide

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Step 1: Create the Google Sheet](#step-1-create-the-google-sheet)
4. [Step 2: Set Up Google Apps Script Backend](#step-2-set-up-google-apps-script-backend)
5. [Step 3: Deploy the Web App](#step-3-deploy-the-web-app)
6. [Step 4: Configure the Frontend](#step-4-configure-the-frontend)
7. [Step 5: Google Drive Setup](#step-5-google-drive-setup)
8. [System Architecture](#system-architecture)
9. [API Reference](#api-reference)
10. [Troubleshooting](#troubleshooting)

---

## Overview

The AUKTAVE 2026 Financial Management System is a complete web-based dashboard built with:

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5 + Tailwind CSS + Chart.js + Vanilla JavaScript |
| Backend | Google Apps Script (Web App) |
| Database | Google Sheets (7 tabs) |
| Storage | Google Drive (invoice documents) |

---

## Prerequisites

- A Google account (Gmail/Google Workspace)
- Google Chrome or any modern browser
- Basic familiarity with Google Sheets and Google Drive

---

## Step 1: Create the Google Sheet

### 1.1 Create a New Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet
2. Name it exactly: `AUKTAVE 2026 - Financial System`
3. Click **Share** → Set access to "Anyone with the link" as **Editor** (required for Apps Script to write data)

### 1.2 Create All Required Tabs

Create 7 tabs by clicking the `+` button at the bottom. Name each tab exactly as follows:

#### Tab 1: Income

| Column | Header Name | Data Type |
|--------|------------|-----------|
| A | Date | Date |
| B | Source Type | Text (Sponsorship / AUK Funding / Other) |
| C | Sponsor Name | Text |
| D | Sponsorship Tier | Text (Title / Powered / Sponsored / Co-Sponsored / Partner / In-Kind) |
| E | Amount Committed | Number |
| F | Amount Received | Number |
| G | Pending Amount | Number (auto-calculated) |
| H | Payment Mode | Text |
| I | Status | Text (Pending / Partial / Received / Overdue) |
| J | Invoice Link | URL |
| K | Handled By | Text |
| L | Remarks | Text |

**Type these headers in Row 1** of the Income tab.

#### Tab 2: Expenses

| Column | Header Name | Data Type |
|--------|------------|-----------|
| A | Expense ID | Text (auto-generated: EXP-0001) |
| B | Date | Date |
| C | Committee | Text |
| D | Event | Text |
| E | Category | Text (Production / Marketing / Prize / Logistics / Food / Tech / Misc) |
| F | Description | Text |
| G | Vendor Name | Text |
| H | Amount Estimated | Number |
| I | Amount Approved | Number |
| J | Amount Spent | Number |
| K | Payment Status | Text (Pending / Approved / Paid / Reimbursed) |
| L | Payment Mode | Text |
| M | Invoice Link | URL |
| N | Approved By | Text |
| O | Remarks | Text |

**Type these headers in Row 1** of the Expenses tab.

#### Tab 3: Committees

| Column | Header Name | Data Type |
|--------|------------|-----------|
| A | Committee Name | Text |
| B | Budget Required | Number |
| C | Budget Approved | Number |
| D | Sponsorship Allocated | Number |
| E | Total Available Budget | Number |
| F | Total Spent | Number |
| G | Remaining Budget | Number |
| H | Utilization % | Number |

#### Tab 4: Events

| Column | Header Name | Data Type |
|--------|------------|-----------|
| A | Event Name | Text |
| B | Category | Text |
| C | Budget Required | Number |
| D | Budget Approved | Number |
| E | Sponsorship Assigned | Number |
| F | Total Budget Available | Number |
| G | Total Spent | Number |
| H | Remaining Budget | Number |

#### Tab 5: Vendors

| Column | Header Name | Data Type |
|--------|------------|-----------|
| A | Vendor Name | Text |
| B | Service Type | Text |
| C | Committee | Text |
| D | Total Amount | Number |
| E | Paid Amount | Number |
| F | Pending Amount | Number |
| G | Due Date | Date |
| H | Contact Info | Text |
| I | Status | Text (Active / Paid / Overdue / On Hold) |

#### Tab 6: Approvals

| Column | Header Name | Data Type |
|--------|------------|-----------|
| A | Request ID | Text (auto-generated: REQ-0001) |
| B | Request Date | Date |
| C | Requested By | Text |
| D | Committee | Text |
| E | Purpose | Text |
| F | Amount Requested | Number |
| G | Amount Approved | Number |
| H | Approved By | Text |
| I | Status | Text (Pending / Approved / Rejected / Escalated) |
| J | Notes | Text |

#### Tab 7: Invoices

| Column | Header Name | Data Type |
|--------|------------|-----------|
| A | Invoice ID | Text (auto-generated: INV-0001) |
| B | Linked Reference | Text |
| C | File Link | URL |
| D | Uploaded By | Text |
| E | Date | Date |
| F | Verification Status | Text (Pending / Verified / Rejected) |

### 1.3 Get the Spreadsheet ID

1. With your spreadsheet open, look at the URL in your browser
2. It looks like: `https://docs.google.com/spreadsheets/d/1ABC123xyz.../edit`
3. Copy the long string between `/d/` and `/edit` - this is your **Spreadsheet ID**
4. Save it somewhere - you'll need it in Step 2

---

## Step 2: Set Up Google Apps Script Backend

### 2.1 Open the Script Editor

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. This opens the Google Apps Script editor in a new tab
3. You'll see a default `Code.gs` file with a `myFunction()` - delete all that code

### 2.2 Paste the Backend Code

1. Open the `backend.gs` file from this project
2. Select all code and copy it
3. Paste it into the Apps Script editor, replacing everything
4. **Important**: Find this line at the top:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
   ```
5. Replace `YOUR_SPREADSHEET_ID_HERE` with the actual Spreadsheet ID you copied in Step 1.3

### 2.3 Save the Project

1. Click **Save** (floppy disk icon) or press `Ctrl+S` / `Cmd+S`
2. Click **Untitled project** at the top and rename it to: `AUKTAVE 2026 Finance API`

---

## Step 3: Deploy the Web App

### 3.1 Deploy for the First Time

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon next to "Type" and select **Web app**
3. Configure:
   - **Description**: `AUKTAVE 2026 Finance API v1`
   - **Execute as**: `Me` (your Google account)
   - **Who has access**: `Anyone` (this allows the frontend to connect)
4. Click **Deploy**
5. You'll be asked to authorize - click through the permissions:
   - Click **Review Permissions**
   - Choose your Google account
   - Click **Advanced** → **Go to AUKTAVE 2026 Finance API (unsafe)**
   - Click **Allow** for all requested permissions (this lets the script read/write your Sheet and access Drive)

### 3.2 Copy the Web App URL

After deployment, you'll see a dialog with:

```
Web app
https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXX/exec
```

**Copy this URL** - this is your API endpoint. Save it for Step 4.

### 3.3 Re-deploying After Code Changes

If you ever update the backend code:

1. Make your changes in the Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the pencil icon on your deployment
4. Click **Version** → **New version**
5. Click **Deploy**
6. The URL stays the same - no frontend changes needed!

---

## Step 4: Configure the Frontend

### Option A: Use as Standalone HTML File

1. Open the `index.html` file from this project in any text editor
2. Find the `CONFIG` section in the JavaScript:
   ```javascript
   const CONFIG = {
     API_BASE_URL: localStorage.getItem('auktave_api_url') || '',
     // ...
   };
   ```
3. The app will prompt for the API URL on first load, so just open the HTML file in a browser

### Option B: Deploy as a Web App (Recommended for Team Access)

You can also serve this HTML from Google Apps Script itself:

1. In the Apps Script editor, create a new HTML file:
   - Click **Files** (left sidebar) → **+** → **HTML**
   - Name it `Index`
2. Copy ALL the content from `index.html` and paste it into this new HTML file
3. Add a `doGet` function to `Code.gs`:
   ```javascript
   function doGet(e) {
     if (e.parameter.action) {
       // API endpoint handling (your existing code already has this)
     }
     return HtmlService.createHtmlOutputFromFile('Index')
       .setTitle('AUKTAVE 2026 - Finance')
       .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
   }
   ```
4. Re-deploy the web app
5. Now the same URL serves both the UI and the API!

### Option C: Deploy to Any Web Server

Upload `index.html` to:
- GitHub Pages
- Netlify Drop
- Vercel
- Any static hosting

The app is a single static file with no build step required.

### First Run

1. Open the frontend in your browser
2. On first load, a modal will appear asking for the **Google Apps Script Web App URL**
3. Paste the URL you copied in Step 3.2
4. Click **Connect**
5. The URL is saved in your browser's localStorage, so you won't need to enter it again

---

## Step 5: Google Drive Setup

### 5.1 Create Invoice Storage Folder

1. Go to [Google Drive](https://drive.google.com)
2. Create a new folder named: `AUKTAVE 2026 - Invoices`
3. Right-click → **Share** → "Anyone with the link" → **Viewer** (or Editor if team needs to upload)

### 5.2 Upload Invoice Files

To link invoices in the system:

1. Upload the invoice PDF/image to the Google Drive folder
2. Right-click the file → **Share** → **Copy link**
3. Make sure link sharing is set to "Anyone with the link can view"
4. Paste this link into the "Invoice Link" field when adding/editing income or expense records

### 5.3 Best Practices

- Use descriptive filenames: `EXP-0001_Invoice_VendorName_Date.pdf`
- Organize with subfolders if needed: `Sponsorship Invoices/`, `Expense Invoices/`
- Always verify sharing permissions before pasting links

---

## System Architecture

```
                    ┌─────────────────────────────────────────┐
                    │         User Browser (Frontend)          │
                    │  ┌─────────┐  ┌─────────┐  ┌─────────┐ │
                    │  │Dashboard│  │  Forms  │  │ Charts  │ │
                    │  └────┬────┘  └────┬────┘  └────┬────┘ │
                    │       └──────────────┼──────────────┘    │
                    │                      │                   │
                    └──────────────────────┼───────────────────┘
                                           │ HTTPS (JSON)
                                           ▼
                    ┌─────────────────────────────────────────┐
                    │     Google Apps Script (Web App)         │
                    │  ┌─────────┐  ┌─────────┐  ┌─────────┐ │
                    │  │  doGet  │  │ doPost  │  │ CORS    │ │
                    │  │  doPost │  │Handlers │  │ Headers │ │
                    │  └────┬────┘  └────┬────┘  └─────────┘ │
                    └───────┼────────────┼────────────────────┘
                            │            │
                            ▼            ▼
                    ┌──────────────┐  ┌──────────────┐
                    │ Google Sheet │  │ Google Drive │
                    │  (7 Tabs)    │  │ (Invoices)   │
                    └──────────────┘  └──────────────┘
```

---

## API Reference

### GET Endpoints

All GET requests are made to: `YOUR_WEB_APP_URL?action={endpoint}`

| Endpoint | Returns |
|----------|---------|
| `?action=dashboard` | Aggregated KPIs, chart data, recent activity |
| `?action=income` | All income records |
| `?action=expenses` | All expense records |
| `?action=committees` | All committee records |
| `?action=events` | All event records |
| `?action=vendors` | All vendor records |
| `?action=approvals` | All approval records |
| `?action=invoices` | All invoice records |

### POST Endpoints

All POST requests send JSON body with an `action` field:

#### Income
```json
{
  "action": "addIncome",
  "date": "2026-01-15",
  "sourceType": "Sponsorship",
  "sponsorName": "TechCorp India",
  "sponsorshipTier": "Title",
  "amountCommitted": "500000",
  "amountReceived": "250000",
  "paymentMode": "Bank Transfer",
  "handledBy": "John Doe",
  "remarks": "50% advance received"
}
```

```json
{
  "action": "updateIncome",
  "id": 3,
  "amountReceived": "500000",
  "status": "Received"
}
```

#### Expenses
```json
{
  "action": "addExpense",
  "date": "2026-01-20",
  "committee": "Technical",
  "event": "Hackathon",
  "category": "Prize",
  "description": "Hackathon winner prizes",
  "vendorName": "Amazon Gift Cards",
  "amountEstimated": "50000",
  "amountApproved": "45000",
  "amountSpent": "45000",
  "paymentStatus": "Paid",
  "paymentMode": "UPI"
}
```

```json
{ "action": "deleteExpense", "id": "EXP-0005" }
```

#### Approvals
```json
{
  "action": "addApproval",
  "requestedBy": "Jane Smith",
  "committee": "Marketing",
  "purpose": "Social media campaign",
  "amountRequested": "25000",
  "notes": "Need approval by Friday"
}
```

```json
{
  "action": "updateApproval",
  "id": "REQ-0003",
  "status": "Approved",
  "amountApproved": "20000",
  "approvedBy": "Finance Head"
}
```

#### Invoices
```json
{
  "action": "addInvoice",
  "linkedReference": "EXP-0012",
  "fileLink": "https://drive.google.com/file/d/ABC123/view",
  "uploadedBy": "John Doe",
  "verificationStatus": "Pending"
}
```

### Response Format

All responses are JSON:

```json
{
  "success": true,
  "data": { ... }
}
```

Or on error:

```json
{
  "success": false,
  "error": "Error message here"
}
```

---

## Data Entry Workflow

### Typical Day-to-Day Usage

1. **Receive Sponsorship**: Go to **Income** → Add Income → Fill sponsor details → Save
2. **New Expense**: Go to **Expenses** → Add Expense → Fill details → Auto-generated EXP-ID
3. **Budget Request**: Go to **Approvals** → New Request → Wait for approval
4. **Process Approval**: Go to **Approvals** → Edit → Set status to Approved → Enter approved amount
5. **Upload Invoice**: Upload to Google Drive → Copy link → Go to **Invoices** → Add Invoice Record → Paste link
6. **Link Invoice to Expense**: Edit expense → Paste invoice link in "Invoice Link" field
7. **Check Dashboard**: View real-time KPIs and charts
8. **Generate Reports**: Go to **Analytics** for comprehensive visualizations

---

## Troubleshooting

### "API URL not configured" error
- The modal should appear asking for the URL. If not, clear localStorage and refresh:
  ```javascript
  localStorage.removeItem('auktave_api_url');
  location.reload();
  ```

### "Failed to load..." errors
1. Check your internet connection
2. Verify the Web App URL is correct
3. Ensure the Google Sheet sharing is set to "Anyone with the link can edit"
4. Check browser console (F12) for detailed error messages

### "Authorization required" errors
- The Apps Script needs permission to access your Google Sheets and Drive
- Re-deploy the web app and go through the authorization flow again

### Charts not displaying
- Ensure Chart.js CDN is accessible: `https://cdn.jsdelivr.net/npm/chart.js`
- Check that data exists in the Google Sheet (empty sheets = empty charts)

### CORS errors in browser console
- Make sure the Web App is deployed with "Execute as: Me" and "Who has access: Anyone"
- The backend code includes CORS headers in all responses

### Data not saving
- Verify the Google Sheet tab names match exactly (case-sensitive)
- Check that Row 1 has the correct headers
- Ensure the Spreadsheet ID in backend.gs is correct

### Slow loading
- The system fetches fresh data on every page navigation
- For large datasets, consider implementing server-side pagination in the backend

---

## Security Notes

1. **Sheet Permissions**: The Sheet must be shared with "Anyone with the link can edit" for the Apps Script to work
2. **Web App Access**: Set to "Anyone" allows anyone with the URL to read/write data
3. **For Production**: Consider adding authentication:
   - Check `Session.getActiveUser().getEmail()` in doPost/doGet
   - Maintain an allowed emails list in a "Users" tab
   - Return 403 for unauthorized users

4. **Audit Trail**: The system tracks "Handled By", "Approved By", and "Uploaded By" fields

---

## Files Included

```
auktave-finance/
├── backend.gs          # Google Apps Script backend (copy into GAS editor)
├── index.html          # Complete frontend (open in browser or deploy)
├── README.md           # This deployment guide
└── design.md           # System design document (for reference)
```

---

## Support

For issues or questions:
1. Check the browser console (F12) for error messages
2. Verify all steps in this guide were followed exactly
3. Ensure Google Sheet headers match the specified column names
4. Re-deploy the Apps Script after any code changes

---

**Built for AUKTAVE 2026. Financial control made simple.**
