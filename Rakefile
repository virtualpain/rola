require "fileutils"
require "uglifier"
require "cssminify"
require "sass"
require "json"

bower_info = JSON.parse(File.read('bower.json'))
version = bower_info['track_version']
copyright_text = <<END
/*
    Rola UI Framework
    (c) YEAR virtualpain (Alvina Putri)
    Version VERSION
 */

END

copyright_text = copyright_text.gsub('VERSION',version).gsub('YEAR',Time.now.year.to_s)

desc "Build all sass, css, and js files"
task :default => [:all]

task :all => [:clean,:compile,:finishing]

task :clean do
    FileUtils.rm_rf('css/*')
    FileUtils.rm_rf('js/*')
end

task :compile => [:minify_css,:compile_sass,:minify_js]

desc "Finishing touch after compilation"
task :finishing do
    # Do nothing now
end

# minify_js will minify all js files in src/js into single
# build/js/rola.min.js
task :minify_js do
    files = Dir["src/js/*.js"]
    result = "#{copyright_text}"
    files.each do |file|
        puts "Minifying #{file}"
        result += Uglifier.compile(File.read(file))
    end
    File.write('js/rola.min.js',result)
end

# Read build whether there are any file
#
task :minify_css do
    files = Dir["src/css/*.css"]
    result = "#{copyright_text}"
    files.each do |file|
        puts "Minifying #{file}"
        result += CSSminify.compress(File.read(file))
    end
    File.write('css/rola-other.min.css',result)
end

task :compile_sass do
    sh "sass --scss --style compressed --sourcemap=none src/sass/rola.scss css/rola.min.css"
    compiled = File.read "css/rola.min.css"
    compiled = copyright_text + compiled
    File.write('css/rola.min.css',compiled)
end

task :css => [:compile_sass]
