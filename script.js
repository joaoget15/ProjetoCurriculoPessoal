window.onload = function() {
    var skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(function(skillBar) {
      var progress = skillBar.querySelector('.progress');
      var percentage = parseInt(skillBar.querySelector('.percentage').textContent);
      progress.style.width = percentage + '%';
    });
  };

