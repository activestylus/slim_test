//============================================================
// Nested Attributes
//============================================================
"a.add_another".on('click', function(){
  var child = this.prev('.children').find('.child').last(); var clone = child.clone();
  clone.find('input').each(function(input) {
    var index = input.get('name').match(/\d+/)[0];
    input.set('name', input.get('name').replace(index, index.toInt() + 1) );
    input.set(  'id', input.get('id')  .replace(index, index.toInt() + 1) );
  });
  this.prev('.children').first('tbody').insert(clone);
});

".child a.remove".on('click', function(){
  collection = this.parent('.children').find('.child').size();
  child = this.parent('.child');
  if (collection > 1) {
    child.hide().removeClass('child');
    this.prev('input').setValue('1');
  }
});
