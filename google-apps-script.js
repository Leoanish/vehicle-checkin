function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create headers if sheet is brand new
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Vehicle",
        "Driver Name",
        "End Mileage",
        "Fuel Level",
        "Doors Closed",
        "Truck Locked",
        "Electronics Removed",
        "Messes Cleaned"
      ]);
      // Format header row
      sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#e2e8f0");
    }
    
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString(),
      data.vehicle || "",
      data.driverName || "",
      data.endMileage || "",
      data.fuelLevel || "",
      data.doorsClosed || "Yes",
      data.truckLocked || "Yes",
      data.electronicsRemoved || "Yes",
      data.messesCleaned || "Yes"
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
