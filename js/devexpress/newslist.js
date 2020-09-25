$(function(){
    $("#simpleList").dxList({
        dataSource: employees,
        height: "100%",
        grouped: true,
        collapsibleGroups: true,
        groupTemplate: function(data) {
            return $("<div>Date: " + data.key + "</div>");
    
        }
    });
    
});

var employees = [{
    "key": "September 20, 2020",
    "items": ["Choose between PPO and HMO Health Plan", "Google AdWords Strategy"]
}, {
    "key": "September 19, 2020",
    "items": ["Update Personnel Files",]
}, {
    "key": "September 18, 2020",
    "items": ["Deliver R&D Plans for 2013","Approval on Converting to New HDMI Specification"]
}, {
    "key": "September 17, 2020",
    "items": ["Approve Hiring of John Jeffers", "Update Employee Files with New NDA"]
}, {
    "key": "September 16, 2020",
    "items": ["Prepare 3013 Marketing Plan", "Review Site Up-Time Report"]
}];