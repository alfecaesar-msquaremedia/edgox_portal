// let theFields = {
//   instituteName: "Name",
//   instituteAlias: "alias",
//   dliNo: "dli",
//   logoFile: "Logo",
//   instituteImageFile: "Image",
//   aetterHeadFile: "Letterhead",
//   address1: "Address 1",
//   address2: "Address 2",
//   country: "Country",
//   proviceState: "Provice/State",
//   city: "City",
//   zipCode: "Zip Code",
//   instituteLocationGeoCode: "Institutions Location Geo Code",
//   instituteType: "Institution Type",
//   instituteFounded: "Institution Founded",
//   totalStudents: "TotalStudents",
//   currency: "Currency",
//   avgTuitionCost: "Avg. Tuition Cost",
//   costOfLiving: "Cost of Living",
//   applicationFee: "Application Fee",
//   paymentLink: "Payment Link",
//   website: "Website",
//   videoLink: "Video Link",
//   howToReach: "How To Reach",
//   aboutInstitute: "About Institutions",
//   features: "Features",
//   credit
// };

let theFields = {
  "University Name": "",
  "University Logo": "",
  "University Type": "",
  "University Address": "",
  "University Email": "",
  "University Primary Contact Name": "",
  "University Primary Contact Number": "",
  "University Secondary Contact Name": "",
  "University Secondary Contact Number": "",
};

let uniType = [
  "HR Manager",
  "IT Manager",
  "CEO",
  "Controller",
  "Sales Manager",
  "Support Manager",
  "Shipping Manager",
];

let formInstitute = function () {
  $("#formInstitute").dxForm({
    formData: theFields,
    colCount: "2",

    items: [
      {
        dataField: "University Name",
        caption: "University Name",
        validationRules: [
          {
            type: "required",
            message: "Institution Name is required",
          },
          {
            type: "pattern",
            pattern: "^[^0-9]+$",
            message: "Do not use digits in the Institution Name",
          },
        ],
      },
      {
        template: function (data, itemElement) {
          itemElement.append($("<div>").attr("id", "dxfu1").dxFileUploader());
        },
        name: "dxfu1",
        label: {
          text: "University Logo",
        },
      },
      {
        dataField: "University Type",
        editorType: "dxSelectBox",
        editorOptions: {
          items: uniType,
          value: "",
        },
        validationRules: [
          {
            type: "required",
            message: "University Type Required",
          },
        ],
      },
      {
        dataField: "University Address",
      },
      {
        dataField: "University Primary Contact Name",
        validationRules: [
          {
            type: "required",
            message: "University Primary Contact Name is required",
          },
          {
            type: "pattern",
            pattern: "^[^0-9]+$",
            message: "Do not use digits in the University Primary Contact Name",
          },
        ],
      },
      {
        dataField: "University Primary Contact Numbers",
      },
      {
        dataField: "University Secondary Contact Name",
        validationRules: [
          {
            type: "required",
            message: "University Secondary Contact Name is required",
          },
          {
            type: "pattern",
            pattern: "^[^0-9]+$",
            message:
              "Do not use digits in the University Secondary Contact Name",
          },
        ],
      },
      {
        dataField: "University Secondary Contact Number",
      },
      {
        itemType: "button",
        horizontalAlignment: "left",
        buttonOptions: {
          text: "Submit",
          type: "success",
          useSubmitBehavior: true,
        },
      },
    ],

    // items: [
    //   {
    //     dataField: "instituteName",
    //     validationRules: [
    //       {
    //         type: "required",
    //         message: "Institution Name is required",
    //       },
    //       {
    //         type: "pattern",
    //         pattern: "^[^0-9]+$",
    //         message: "Do not use digits in the Institution Name",
    //       },
    //     ],
    //   },
    //   {
    //     dataField: "Institution Alias",
    //     validationRules: [
    //       {
    //         type: "required",
    //         message: "Institution Alias is required",
    //       },
    //       {
    //         type: "pattern",
    //         pattern: "^[^0-9]+$",
    //         message: "Do not use digits in the Institution Name",
    //       },
    //     ],
    //   },
    //   {
    //     dataField: "dliNo",
    //   },
    //   {
    //     dataField: "address1",
    //   },
    //   {
    //     dataField: "address2",
    //     colSpan: 2,
    //   },
    //   {
    //     itemType: "group",
    //     colCount: 4,
    //     colSpan: 2,
    //     items: [
    //       {
    //         dataField: "country",
    //         validationRules: [
    //           {
    //             type: "pattern",
    //             pattern: "^[^0-9]+$",
    //             message: "Do not use digits in the Country",
    //           },
    //         ],
    //       },
    //       {
    //         dataField: "provinceState",
    //         validationRules: [
    //           {
    //             type: "pattern",
    //             pattern: "^[^0-9]+$",
    //             message: "Do not use digits in the Provice/State",
    //           },
    //         ],
    //       },
    //       {
    //         dataField: "city",
    //         validationRules: [
    //           {
    //             type: "pattern",
    //             pattern: "^[^0-9]+$",
    //             message: "Do not use digits in the City",
    //           },
    //         ],
    //       },
    //       {
    //         dataField: "zipCode",
    //       },
    //       {
    //         dataField: "instituteLocationGeoCode",
    //       },
    //       {
    //         dataField: "instituteType",
    //       },
    //       {
    //         dataField: "instituteFounded",
    //       },
    //       {
    //         dataField: "totalStudents",
    //       },
    //       {
    //         dataField: "currency",
    //       },
    //       {
    //         dataField: "avgTuitionCost",
    //       },
    //       {
    //         dataField: "costOfLiving",
    //       },
    //       {
    //         dataField: "applicationFee",
    //       },
    //     ],
    //   },
    //   {
    //     dataField: "paymentLink",
    //     colSpan: 2,
    //   },
    //   {
    //     dataField: "website",
    //     colSpan: 2,
    //   },
    //   {
    //     dataField: "videoLink",
    //     colSpan: 2,
    //   },
    //   {
    //     dataField: "howToReach",
    //     colSpan: 2,
    //     editorType: "dxTextArea",
    //   },
    //   {
    //     colSpan: 2,
    //     dataField: "aboutInstitute",
    //     editorType: "dxHtmlEditor",
    //     editorOptions: {
    //       height: 190,
    //       toolbar: {
    //         items: ["bold", "italic", "underline"],
    //       },
    //     },
    //   },
    //   {
    //     colSpan: 2,
    //     dataField: "features",
    //     editorType: "dxHtmlEditor",
    //     editorOptions: {
    //       height: 190,
    //       toolbar: {
    //         items: ["bold", "italic", "underline"],
    //       },
    //     },
    //   },
    // ],
  });

  $("#logoFile").dxFileUploader({
    selectButtonText: "Upload Image",
    labelText: "University Logo",
    accept: "image/*",
    uploadMode: "useForm",
  });
  // $("#institute-image").dxFileUploader({
  //   selectButtonText: "Institution Image",
  //   labelText: "Test",
  //   accept: "image/*",
  //   uploadMode: "useForm",
  // });
  // $("#letterHead").dxFileUploader({
  //   selectButtonText: "Letter Head",
  //   labelText: "Test",
  //   accept: "image/*",
  //   uploadMode: "useForm",
  // });

  $("#formInstitute").dxForm("instance").validate();
};

const mentorFields = {
  mentorName: "Mentor Name",
  degree: "Degree",
  experience: "Experience",
  specialization: "Specialization",
};

let formMentors = function () {
  $("#formMentors").dxForm({
    formData: mentorFields,
    colCount: "2",

    items: [
      {
        dataField: "mentorName",
        validationRules: [
          {
            type: "required",
            message: "Institution Name is required",
          },
          {
            type: "pattern",
            pattern: "^[^0-9]+$",
            message: "Do not use digits in the Institution Name",
          },
        ],
      },
      {
        dataField: "degree",
        editorType: "dxSelectBox",
        editorOptions: {
          items: ["Associate Degree", "Bachelors Degree", "Masters"],
          value: "",
        },
        validationRules: [
          {
            type: "required",
            message: "Degree is Required",
          },
        ],
      },
      {
        dataField: "experience",
        editorType: "dxSelectBox",
        editorOptions: {
          items: ["0-2 years", "3-5 years", "5+ years"],
          value: "",
        },
        validationRules: [
          {
            type: "required",
            message: "Experience is Required",
          },
        ],
      },
      {
        dataField: "specialization",
        editorType: "dxSelectBox",
        editorOptions: {
          items: ["IT", "Law", "Science", "Medical"],
          value: "",
        },
        validationRules: [
          {
            type: "required",
            message: "Specialization is Required.",
          },
        ],
      },
      {
        itemType: "button",
        horizontalAlignment: "left",
        buttonOptions: {
          text: "Submit",
          type: "success",
          useSubmitBehavior: true,
        },
      },
    ],
  });
  $("#formMentors").dxForm("instance").validate();
};

$(function () {
  if ($("main").hasClass("addInstitute")) {
    formInstitute();
  }
  if ($("main").hasClass("addMentors")) {
    formMentors();
  }
});
