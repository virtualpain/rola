require "fileutils"
require "uglifier"
require "cssminify"
require "sass"

build_dirs = ['css','js','images','fonts','etc']

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
    result = ""
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
    result = ""
    files.each do |file|
        puts "Minifying #{file}"
        result += CSSminify.compress(File.read(file))
    end
    File.write('css/rola-other.min.css',result)
end

task :compile_sass do
    sh "sass --scss --style compressed --sourcemap=none src/sass/rola.scss css/rola.min.css"
end
