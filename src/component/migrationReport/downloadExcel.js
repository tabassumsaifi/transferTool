import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export const downloadExcelData = (data) => {
  // let excelData = [];
  // data.forEach((i) => {
  //   let item = { ...i, proppertyLength: i.properties.length };
  //   excelData.push(item);
  // });

  let workbook = new ExcelJS.Workbook();
  let clusterSheet = workbook.addWorksheet("Migration-Records");

  clusterSheet.views = [{ state: "frozen", xSplit: 0, ySplit: 1 }];

  clusterSheet.getRow(1).fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFD6D6D6" },
  };

  ["A1", "B1", "C1", "D1", "E1", "F1"].forEach((key) => {
    clusterSheet.getCell(key).border = {
      right: { style: "thin" },
    };
  });

  clusterSheet.columns = [
    { header: "Objects", key: "name", width: 25 },
    { header: "Total", key: "total", width: 21 },
    // { header: "Filtered ", key: "filtered", width: 20 },
    // { header: "New", key: "new", width: 20 },
    // { header: "Existing", key: "existing", width: 20 },
    // { header: "Completed ", key: "completed", width: 20 },
    // { header: "Pending", key: "pending", width: 20 }
  ];

  clusterSheet.addRows(data);

  clusterSheet.getColumn("B").alignment = {
    wrapText: true,
    horizontal: "left",
  };

  clusterSheet.getColumn("C").alignment = { wrapText: true };

  if (data.length === 0) {
    clusterSheet.addRow(["No Data !!"]);
  }

  workbook.xlsx.writeBuffer().then(function(excelData) {
    var blob = new Blob([excelData], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    var fileName = "Migration_Report_" + Math.floor(new Date() / 1000) + ".xlsx";
    saveAs(blob, fileName);
  });
};
