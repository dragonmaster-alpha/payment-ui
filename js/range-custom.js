
jQuery(document).ready(function(){

        $(".range-brand-input").asRange({

          // namespace
          namespace: 'asRange',

          // requires additional skin file
          skin: null,

          // max value
          max: 100,

          // min value
          min: 0,

          // initial value
          value: null,

          // moving step at a time
          step: 10,

          // limit the range of the pointer moving
          limit: true,

          // initial range
          range: false,

          // 'v' or 'h'
          direction: 'h', 

          // enable keyboard interactions
          keyboard: true,

          // false, 'inherit', {'inherit': 'default'}
          replaceFirst: false, 

          // shows tips
          tip: true,

          // shows scales
          scale: true,

          // for formatting output
          format: function format(value) {
            return value;
          }

    });
});