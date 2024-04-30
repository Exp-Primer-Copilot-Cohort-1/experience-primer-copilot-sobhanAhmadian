function skillsMember() {
  var member = document.getElementById('member');
  member.addEventListener('click', function() {
    var member = document.getElementById('member');
    var memberValue = member.value;
    if (memberValue === 'member') {
      member.value = 'member';
    } else {
      member.value = 'member';
    }
  });
}