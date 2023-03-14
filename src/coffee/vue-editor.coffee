# Copyright 2023 Cyril John Magayaga
# CyCode (v1.1.2)
new Vue(
  el: '#editor'
  data: input: '# Hello, World!'
  computed: compiledMarkdown: ->
    marked @input, sanitize: true
  methods: update: _.debounce(((e) ->
    @input = e.target.value
    return
  ), 300))