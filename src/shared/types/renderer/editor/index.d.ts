export type Language =
  | 'abap'
  | 'abc'
  | 'actionscript'
  | 'ada'
  | 'alda'
  | 'apache_conf'
  | 'apex'
  | 'applescript'
  | 'aql'
  | 'asciidoc'
  | 'asl'
  | 'asp_vb_net'
  | 'assembly_x86'
  | 'autohotkey'
  | 'batchfile'
  | 'c_cpp'
  | 'c9search'
  | 'cirru'
  | 'clojure'
  | 'cobol'
  | 'coffee'
  | 'coldfusion'
  | 'crystal'
  | 'csharp'
  | 'csound_document'
  | 'csound_orchestra'
  | 'csound_score'
  | 'csp'
  | 'css'
  | 'curly'
  | 'd'
  | 'dart'
  | 'diff'
  | 'django'
  | 'dockerfile'
  | 'dot'
  | 'drools'
  | 'edifact'
  | 'eiffel'
  | 'ejs'
  | 'elixir'
  | 'elm'
  | 'erlang'
  | 'forth'
  | 'fortran'
  | 'fsharp'
  | 'fsl'
  | 'ftl'
  | 'gcode'
  | 'gherkin'
  | 'gitignore'
  | 'glsl'
  | 'gobstones'
  | 'golang'
  | 'graphqlschema'
  | 'groovy'
  | 'haml'
  | 'handlebars'
  | 'haskell_cabal'
  | 'haskell'
  | 'haxe'
  | 'hjson'
  | 'html_elixir'
  | 'html_ruby'
  | 'html'
  | 'ini'
  | 'io'
  | 'jack'
  | 'jade'
  | 'java'
  | 'javascript'
  | 'json'
  | 'json5'
  | 'jsoniq'
  | 'jsp'
  | 'jssm'
  | 'jsx'
  | 'julia'
  | 'kotlin'
  | 'kusto'
  | 'latex'
  | 'latte'
  | 'less'
  | 'liquid'
  | 'lisp'
  | 'livescript'
  | 'logiql'
  | 'logtalk'
  | 'lsl'
  | 'lua'
  | 'luapage'
  | 'lucene'
  | 'makefile'
  | 'markdown'
  | 'mask'
  | 'matlab'
  | 'maze'
  | 'mediawiki'
  | 'mel'
  | 'mikrotik'
  | 'mips'
  | 'mixal'
  | 'mushcode'
  | 'mysql'
  | 'nginx'
  | 'nim'
  | 'nix'
  | 'nsis'
  | 'nunjucks'
  | 'objectivec'
  | 'ocaml'
  | 'pascal'
  | 'perl'
  | 'perl6'
  | 'pgsql'
  | 'php_laravel_blade'
  | 'php'
  | 'pig'
  | 'plain_text'
  | 'powershell'
  | 'praat'
  | 'prisma'
  | 'prolog'
  | 'properties'
  | 'protobuf'
  | 'pug'
  | 'puppet'
  | 'python'
  | 'qml'
  | 'r'
  | 'raku'
  | 'razor'
  | 'rdoc'
  | 'red'
  | 'redshift'
  | 'regexp'
  | 'rhtml'
  | 'rst'
  | 'ruby'
  | 'rust'
  | 'sas'
  | 'sass'
  | 'sassdoc'
  | 'scad'
  | 'scala'
  | 'scheme'
  | 'scrypt'
  | 'scss'
  | 'sh'
  | 'sjs'
  | 'slim'
  | 'smalltalk'
  | 'smarty'
  | 'smithy'
  | 'solidity'
  | 'soy_template'
  | 'space'
  | 'sparql'
  | 'sql'
  | 'sqlserver'
  | 'stylus'
  | 'svg'
  | 'swift'
  | 'tcl'
  | 'terraform'
  | 'tex'
  | 'text'
  | 'textile'
  | 'toml'
  | 'tsx'
  | 'turtle'
  | 'twig'
  | 'typescript'
  | 'vala'
  | 'vbscript'
  | 'velocity'
  | 'verilog'
  | 'vhdl'
  | 'visualforce'
  | 'vue'
  | 'wollok'
  | 'xml'
  | 'xquery'
  | 'xsl'
  | 'yaml'
  | 'zeek'

export interface LanguageOption {
  name: string
  value: Language
  grammar?: () => Promise<{ default: any }>
  scopeName?: string
}

export interface GrammarOption {
  grammar: () => Promise<{ default: any }>
  language: Language
  priority: 'asap' | 'now' | 'defer'
}
