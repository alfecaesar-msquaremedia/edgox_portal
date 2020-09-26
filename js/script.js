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
        validationRules: [
          {
            type: "numeric",
          },
        ],
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
        validationRules: [
          {
            type: "numeric",
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

var mentorLists = [
  {
    key: "Steve Rogers A",
    items: ["Bachelors Degree", "5+ years", "IT"],
  },
  {
    key: "Steve Rogers B",
    items: ["Bachelors Degree", "5+ years", "IT"],
  },
  {
    key: "Steve Rogers C",
    items: ["Bachelors Degree", "5+ years", "IT"],
  },
];

var instituteLists = [
  {
    key: "Harvard University",
    items: [
      "Logo.png",
      "Private",
      "America",
      "Professor Marvin",
      "(51)-151-21",
      "Professor Jasmin",
      "(31)-151-11",
    ],
  },
  {
    key: "Oxford University",
    items: [
      "Logo.png",
      "Private",
      "America",
      "Professor Marvin",
      "(51)-151-21",
      "Professor Jasmin",
      "(31)-151-11",
    ],
  },
  {
    key: "Yale University",
    items: [
      "Logo.png",
      "Private",
      "America",
      "Professor Marvin",
      "(51)-151-21",
      "Professor Jasmin",
      "(31)-151-11",
    ],
  },
  {
    key: "Cambridge University",
    items: [
      "Logo.png",
      "Private",
      "America",
      "Professor Marvin",
      "(51)-151-21",
      "Professor Jasmin",
      "(31)-151-11",
    ],
  },
];

let renderMentorList = function () {
  $("#mentorListing").dxList({
    dataSource: mentorLists,
    height: "100%",
    grouped: true,
    collapsibleGroups: true,
    groupTemplate: function (data) {
      return $("<div>Assigned: " + data.key + "</div>");
    },
  });
};

let renderInstitutionList = function () {
  $("#instituteListing").dxList({
    dataSource: instituteLists,
    height: "100%",
    grouped: true,
    collapsibleGroups: true,
    groupTemplate: function (data) {
      return $("<div>Assigned: " + data.key + "</div>");
    },
  });
};

let personalityForm = function () {
  $("#personalityForm").dxForm({
    formData: {
      personalityTrainingName: "",
      degree: "Degree",
      experience: "Experience",
      specialization: "Specialization",
    },
    colCount: 4,
    items: [
      {
        dataField: "personalityTrainingName",
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
    ],
  });
  $("#formMentors").dxForm("instance").validate();
};

let formPayments = function () {
  $("#paymentForms").dxForm({
    formData: {
      amountPayableToUniversity: "",
      amountPayableToMentors: "",
      amountPayableToPersonalityTrainers: "",
    },
    colCount: 3,
    items: [
      {
        dataField: "amountPayableToUniversity",
        validationRules: [
          {
            type: "numeric",
          },
        ],
      },
      {
        dataField: "amountPayabletToMentors",
        validationRules: [
          {
            type: "numeric",
          },
        ],
      },
      {
        dataField: "amountPayableToPersonalityTrainers",
        validationRules: [
          {
            type: "numeric",
          },
        ],
      },
    ],
  });
  $("#paymentForms").dxForm("instance").validate();
};

$(function () {
  if ($("main").hasClass("addInstitute")) {
    formInstitute();
    renderInstitutionList();
  }
  if ($("main").hasClass("addMentors")) {
    formMentors();
    renderMentorList();
  }
  if ($("main").hasClass("addPersonality")) {
    personalityForm();
  }
  if ($("main").hasClass("formPayments")) {
    formPayments();
  }
});
