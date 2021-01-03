const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

gulp.task("sass-compile", () => {
    return gulp.src("./sass/style.sass")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }).on("ERROR..", sass.logError))
        .pipe(rename({ "suffix": '.min' }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./css/"));
});

gulp.task("watch", function() {
    gulp.watch("./sass/**/*.sass", gulp.series("sass-compile"));
});