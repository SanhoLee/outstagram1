import gulp from "gulp";
import sass from "gulp-sass";
import del from "del";

sass.compiler = require("node-sass");

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dst: "static/styles",
    watch: "assets/scss/**/*.scss",
  },
  js: {
    src: "assets/js/main.js",
    dst: "static/main",
    watch: "assets/js/**/*.js",
  },
};

const clean = () => del(["static"]);

const styles = () =>
  gulp.src(paths.styles.src).pipe(gulp.dest(paths.styles.dst));

const js = () => {
  gulp.src(paths.js.src).pipe(gulp.dest(paths.js.dst));
};

const dev = gulp.series(clean, styles);

export default dev;

// In order to run gulp file, type npx gulp or using gulp-node?
