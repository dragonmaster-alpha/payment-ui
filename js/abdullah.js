var trackerSeconds = 0;
var trackerMinutes = 0;
var trackerHours = 0;
var trackerStarted = false;
function pad(number) {
  return (number < 10 ? "0" : "") + number;
}
$(document).ready(function () {
  // header
  $(".drag_searchBtn").click(function () {
    $(".responsiveHeader .searchContainer").addClass("active");
  });
  $(".navbar-toggler").click(function () {
    $(".responsiveHeader .sidebar").addClass("active");
  });
  $(".responsiveHeader .closeBtn").click(function () {
    $(".responsiveHeader .searchContainer").removeClass("active");
    $(".responsiveHeader .sidebar").removeClass("active");
  });
  $(".responsiveHeader .Howitworks>div:nth-child(1)").click(function () {
    $(this).parent().find("svg").toggleClass("active");
    $(this).find("a").toggleClass("active");
  });
  // header ends
  // jobs page start
  $(".jobs-content .sidebar li a").click(function () {
    $(".jobs-content .sidebar li").removeClass("active");
    $(this).parent().addClass("active");
    var id = $(this).attr("href");
    $(".tab-content div").removeClass("show");
    $(id).addClass("show");
  });
  $(".jobs-content .allJobs-head li").click(function () {
    $(".allJobs-head li").removeClass("active");
    $(this).addClass("active");
    var id = $(this).find("a").attr("href");
    $(".allJobs-content div").removeClass("show");
    $(id).addClass("show");
  });
  $(".jobs-content .allJobs button.drag-sidebar").click(function () {
    $(".jobs-content .sidebar").addClass("active");
  });
  $(".jobs-content .sidebar .closeBtn button").click(function () {
    $(".jobs-content .sidebar").removeClass("active");
  });
  // jobs page end
  // Apply freelancer start
  var currentTab = 1; // Current tab is set to be the first tab (0)

  $("#nextBtn").click(function () {
    showTab();
    console.log(currentTab);
  });

  $("#prevBtn").click(function () {
    if ($(`.tab:nth-child(${currentTab})`))
      $(`.tab:nth-child(${currentTab})`).removeClass("d-block");

    currentTab -= 1;
    // console.log($(`.tab:nth-child(${currentTab})`));
    $(`.tab:nth-child(${currentTab})`).addClass("d-block");
    $(`.tab:nth-child(${currentTab})`).find("input").focus();
    $(`.tab:nth-child(${currentTab})`).find("select").focus();
    if (currentTab == 1) {
      $("#prevBtn").css("opacity", "0");
    }
    if (currentTab != 6) {
      $("#nextBtn").removeClass("d-none");
      $("#finish").removeClass("d-block");
    }
    fixStepIndicator(currentTab);
  });

  async function showTab(firstshow = false) {
    if (!validateForm(currentTab)) return false;
    if ($(`.tab:nth-child(${currentTab})`)) {
      $(`.tab:nth-child(${currentTab})`).removeClass("d-block");

      currentTab += 1;
      // This function will display the specified tab of the form...
      $(`.tab:nth-child(${currentTab})`).addClass("d-block");
      $(`.tab:nth-child(${currentTab})`).find("input").focus();
      $(`.tab:nth-child(${currentTab})`).find("select").focus();
    }
    if (currentTab == 6) {
      $("#nextBtn").addClass("d-none");
      $("#finish").addClass("d-block");
    }
    if (currentTab !== 1) {
      $("#prevBtn").css("opacity", "1");
    }
    fixStepIndicator(currentTab);
  }

  function validateForm(currentTab) {
    // if (currentTab == 1) return true;
    // This function deals with validation of the form fields
    let valid = true;
    const curTab = $(`.tab:nth-child(${currentTab})`);
    // console.log($(curTab).find("select").val());
    // console.log($(curTab).find("input"));
    if ($(curTab).find("input").length > 0) {
      if (!$(curTab).find("input").val()) {
        valid = false;
      }
    } else if ($(curTab).find("select").length > 0) {
      if (!$(curTab).find("select").val()) {
        valid = false;
      }
    }
    // console.log(valid);
    if (!valid) {
      $(curTab).find("input").addClass("invalid");
      $(curTab).find("select").addClass("invalid");
    } else {
      $(curTab).find("input").removeClass("invalid");
      $(curTab).find("select").removeClass("invalid");
    }
    return valid; // return the valid status
  }
  function fixStepIndicator(n) {
    $(`.step`).removeClass("active");
    $(`.step:nth-child(${n})`).addClass("active");
    $(`.step:nth-child(${n}) svg`).addClass("active");
  }
  // press enter
  $("body").on("keyup", function (e) {
    if (currentTab == 1 && e.which == 6) {
      showTab();
    }
  });

  $("#regForm").submit(function (e) {
    if (currentTab != 6) {
      e.preventDefault();
    }
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#previewHolder").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#upload").change(function () {
    readURL(this);
  });

  // Apply freelancer ends
  // apply-job start
  $(".allJobs-head .JobDetails").click(function () {
    $(".postJob").removeAttr("style");
  });
  // apply-job end
  // apply-freelancer-1 start
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#previewHolder").attr("src", e.target.result);
        $("#previewHolder").removeClass("d-none");
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#upload-img").change(function (e) {
    readURL(this);
  });
  $(".cancel-label").click(function () {
    $("#previewHolder").attr("src", "");
    $("#previewHolder").addClass("d-none");
  });
  $("#upload-cv").change(function () {
    $("#cv-name").text($("#upload-cv")[0].files[0].name);
  });
  // apply-freelancer-1 end
  // chat start
  $(".ConversationInfo").click(function () {
    $(".conver-info").toggleClass("d-block");
  });
  $(".chat-sidebar-btn").click(function () {
    $(".chat-sidebar").addClass("active");
  });
  $(".chat-sidebar .chat-contact").click(function () {
    $(".chat-sidebar").removeClass("active");
  });
  // chat end
  // user-setting start
  $(".user-setting-sidebar-head.sub-head .burger-icon").click(function () {
    $(".user-setting-sidebar").addClass("active");
    $(".user-setting .overlay").addClass("active");
  });
  $(".user-setting .overlay").click(function () {
    $(".user-setting-sidebar").removeClass("active");
    $(".user-setting .overlay").removeClass("active");
  });
  // user-setting end
  // project management start
  $(".project-manage-head .burger-icon").click(function () {
    $(".user-setting-sidebar").addClass("active");
    $(".project-manage .overlay").addClass("active");
  });
  $(".project-manage .overlay").click(function () {
    $(".user-setting-sidebar").removeClass("active");
    $(".project-manage .overlay").removeClass("active");
  });
  // project management end
  // tracking page start

  $(".start-tracker").click(function (e) {
    e.preventDefault();
    trackerStarted = !trackerStarted;
    if (trackerStarted == true) {
      $(this).find(".pause-tracker").css("display", "block");
      $(this).find(".play-tracker").css("display", "none");
    } else {
      $(this).find(".pause-tracker").css("display", "none");
      $(this).find(".play-tracker").css("display", "block");
    }
  });

  setInterval(() => {
    if (trackerStarted) {
      if (trackerSeconds < 59) {
        trackerSeconds++;
      } else {
        trackerSeconds = 0;
        trackerMinutes++;
      }

      if (trackerMinutes == 60) {
        trackerMinutes = 0;
        trackerHours++;
      }

      renderStopWatch();
    }
  }, 1000);

  function renderStopWatch() {
    $("#hours").text(pad(trackerHours) + "hrs");
    $("#minutes").text(pad(trackerMinutes) + "min");
    $("#seconds").text(pad(trackerSeconds) + "sec");
  }

  // tracking page end
  // project management start

  $(document).on("click", ".delete-file", function () {
    $(this).parent().addClass("d-none");
  });
  // project management end
  // user datatable start
  $(".user-datatable .toggle-btn").click(function () {
    $(this).toggleClass("active");
    $(this).parent().parent().next().toggleClass("active");
  });
  // user datatable end
  // header 3 start
  $(".header-bottom-content>div").mouseenter(function () {
    $(this).find("div:nth-child(2)").css("display", "flex");
  });
  $(".header-bottom-content>div").mouseleave(function () {
    $(this).find("div:nth-child(2)").css("display", "none");
  });
  $(".new-header .user-toggle-btn").click(function () {
    $(".quick-user-sidebar").css("transform", "translate(0%)");
    $(".new-header .overlay").addClass("active");
  });
  $(".new-header .quick-user-sidebar .quick-user-head .btn").click(function () {
    $(".quick-user-sidebar").css("transform", "translate(100%)");
    $(".new-header .overlay").removeClass("active");
  });
  $(".new-header .overlay").click(function () {
    $(".quick-user-sidebar").css("transform", "translate(100%)");
    $(".new-header .overlay").removeClass("active");
  });
  $(".action-btn-toggle").click(function () {
    $(".new-header .action-toolbar").toggleClass("active");
  });
  $(".burger-icon").click(function () {
    $(".new-header .sidebar").toggleClass("active");
    $(".new-header .overlay").addClass("active");
  });
  $(".new-header .overlay").click(function () {
    $(".new-header .sidebar").removeClass("active");
    $(".new-header .overlay").removeClass("active");
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".new-header .custom-navbar").addClass("fixed-top");
    } else {
      $(".new-header .custom-navbar").removeClass("fixed-top");
    }
  });
  // header 3 end
});
$(document).ready(function () {
  // post-project-start
  var projectcurrentTab = 1; // Current tab is set to be the first tab (0)

  $("#forwardBtn").click(function () {
    showTab();
    console.log(projectcurrentTab);
  });

  $("#backBtn").click(function () {
    if ($(`.project-tab:nth-child(${projectcurrentTab})`))
      $(`.project-tab`).removeClass("d-block");

    projectcurrentTab -= 1;
    console.log(projectcurrentTab);
    $(`.project-tab:nth-child(${projectcurrentTab})`).addClass("d-block");
    $(`.project-tab:nth-child(${projectcurrentTab})`).find("input").focus();
    $(`.project-tab:nth-child(${projectcurrentTab})`).find("select").focus();
    if (projectcurrentTab == 1) {
      $("#backBtn").css("opacity", "0");
    }
    if (projectcurrentTab != 4) {
      $("#forwardBtn").removeClass("d-none");
      $("#finish").parent().addClass("d-none");
    }
    fixStepIndicator(projectcurrentTab);
  });

  async function showTab() {
    if (!validateForm(projectcurrentTab)) return false;
    if ($(`.project-tab:nth-child(${projectcurrentTab})`)) {
      $(`.project-tab:nth-child(${projectcurrentTab})`).removeClass("d-block");

      projectcurrentTab += 1;
      // This function will display the specified tab of the form...
      $(`.project-tab:nth-child(${projectcurrentTab})`).addClass("d-block");
      $(`.project-tab:nth-child(${projectcurrentTab})`).find("input").focus();
      $(`.project-tab:nth-child(${projectcurrentTab})`).find("select").focus();
    }
    if (projectcurrentTab == 4) {
      $("#forwardBtn").addClass("d-none");
      $("#finish").parent().removeClass("d-none");
    }
    if (projectcurrentTab !== 1) {
      $("#backBtn").css("opacity", "1");
    }
    fixStepIndicator(projectcurrentTab);
  }

  function validateForm(projectcurrentTab) {
    let validationCondition = true;
    const projectcurTab = $(`.project-tab:nth-child(${projectcurrentTab})`);
    $(projectcurTab)
      .find("input")
      .each(function (el, index) {
        if (!$(this).val()) {
          validationCondition = false;
          $(this).parent().addClass("has-error");
        } else {
          $(this).parent().removeClass("has-error");
        }
      });
    $(projectcurTab)
      .find("select")
      .each(function (el, index) {
        if (!$(this).val()) {
          validationCondition = false;
          $(this).parent().addClass("has-error");
        } else {
          $(this).parent().removeClass("has-error");
        }
      });
    $(projectcurTab)
      .find("textarea")
      .each(function (el, index) {
        if (!$(this).val()) {
          validationCondition = false;
          $(this).parent().addClass("has-error");
        } else {
          $(this).parent().removeClass("has-error");
        }
      });
    $(projectcurTab)
      .find("input[type='file']")
      .each(function (el, index) {
        if (!$(this).val()) {
          validationCondition = false;
          $(this).parent().parent().addClass("has-error");
        } else {
          $(this).parent().parent().removeClass("has-error");
        }
      });
    return validationCondition;
  }
  function fixStepIndicator(n) {
    $(
      `.post-project-head .post-project-head-content:nth-child(${n})>div:nth-child(1)>div:nth-child(1)`
    ).addClass("active");
    $(
      `.post-project-head .post-project-head-content:nth-child(${n})>div:nth-child(2)`
    ).addClass("active");
    $(`.post-project-sub-head>div:nth-child(${n})`).addClass("active");
    $(
      `.post-project-head .post-project-head-content:nth-child(${n})>div:nth-child(1)`
    ).addClass("active");
  }

  $("#post-project-form").submit(function (e) {
    if (projectcurrentTab != 5) {
      e.preventDefault();
    }
  });
});
$(document).ready(function () {
  / 1. Visualizing things on Hover - See next part for action on click /;
  $("#stars li")
    .on("mouseover", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on

      // Now highlight all the stars that's not after the current hovered star
      $(this)
        .parent()
        .children("li.star")
        .each(function (e) {
          if (e < onStar) {
            $(this).addClass("hover");
          } else {
            $(this).removeClass("hover");
          }
        });
    })
    .on("mouseout", function () {
      $(this)
        .parent()
        .children("li.star")
        .each(function (e) {
          $(this).removeClass("hover");
        });
    });

  / 2. Action to perform on click /;
  $("#stars li").on("click", function () {
    var onStar = parseInt($(this).data("value"), 10); // The star currently selected
    var stars = $(this).parent().children("li.star");

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
    }

    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt(
      $("#stars li.selected").last().data("value"),
      10
    );
    var msg = "";
    if (ratingValue > 1) {
      msg = "Thanks! You rated this " + ratingValue + " stars.";
    } else {
      msg =
        "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);
  });
});

function responseMessage(msg) {
  $(".success-box").fadeIn(200);
  $(".success-box div.text-message").html("<span>" + msg + "</span>");
}
// post-project-end

// browse project start
$(document).ready(function () {
  $(".browse-project-top .action-btn-toggle").click(function () {
    $(".browse-project-top .responsive-action-btn").toggleClass("active");
  });
});
// browse project end
