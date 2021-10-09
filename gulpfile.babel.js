import gulp from "gulp";
import del from "del";
import babel from "gulp-babel";
import plumber from "gulp-plumber";
import uglify from "gulp-uglify";
import minifyCSS from "gulp-csso";
import autoPrefixer from "gulp-autoprefixer";

var sass = require("gulp-sass")(require("sass"));

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dst: "static/styles/",
    watch: "assets/scss/**/*.scss",
  },
  js: {
    src: "assets/js/main.js",
    dst: "static/js/",
    watch: "assets/js/**/*.js",
  },
};

const clean = () => del(["static"]);

//sass() <- compiler for scss to css.
const styles = () =>
  gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(
      autoPrefixer({
        cascade: false,
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dst));

const js = async () => {
  gulp
    .src(paths.js.src)
    .pipe(plumber())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dst));
};

const watchFile = () => {
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.js.watch, js);
};

const dev = gulp.series(clean, styles, js, watchFile);

export default dev;

// In order to run gulp file, type npx gulp or using gulp-node?
