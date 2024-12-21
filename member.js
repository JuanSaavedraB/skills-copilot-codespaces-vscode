function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    template: '<div>{{member.name}} has skills: {{member.skills.join(", ")}}</div>'
  };
}