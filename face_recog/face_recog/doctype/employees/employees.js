// Copyright (c) 2023, Vignesh P and contributors
// For license information, please see license.txt

frappe.ui.form.on("Employees", {
  before_save: function (frm) {
    let emp_no = generateRandomNumber();
    if (
      frm.doc.first_name != "" &&
      frm.doc.last_name != "" &&
      frm.doc.gender != "" &&
      frm.doc.date_of_joining != ""
    ) {
      frm.set_value("employee_number", emp_no);
    }
  },

  refresh: function (frm) {
    let full_name = frm.doc.first_name + " " + frm.doc.last_name;
    frm.set_value("full_name", full_name);
  },

  after_save: function (frm) {
    let full_name = frm.doc.first_name + " " + frm.doc.last_name;
    frm.set_value("full_name", full_name);
    frm.set_value("employee_number", emp_no);
  },
});

function generateRandomNumber() {
  return Math.floor(Math.random() * (20000 - 10000 + 1) + 10000);
}
