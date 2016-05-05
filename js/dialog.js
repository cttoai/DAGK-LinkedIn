$(document).ready(function () {
    $(function () {
        $(".dialog").dialog({
            autoOpen: false
        });
        $("#btnAddExp").on("click", function () {
            $("#dialog-exp").dialog("open");
        });
        $("#btnEditSummary").on("click", function () {
            $("#dialog-sum").dialog("open");
        });
        $("#btnAddProject").on("click", function () {
            $("#dialog-project").dialog("open");
        });
        $("#btnAddSkill").on("click", function () {
            $("#dialog-skill").dialog("open");
        });
        
    });
    $(".dialog").submit(function(e) {
        e.preventDefault();
        $(".dialog").dialog("close");
    });
});
