new Vue(
  el: '#editor'
  data: input: '# Hello, World!'
  computed: compiledMarkdown: ->
    marked @input, sanitize: true
  methods: update: _.debounce(((e) ->
    @input = e.target.value
    return
  ), 300))