# Obys Agency Website

This project is a frontend clone of the Obys Agency website, showcasing modern web development techniques and interactive design elements.

![HomeSS](docs/home.png)

## Features

- Smooth scrolling with Locomotive Scroll
- Interactive cursor effects
- Preloader with animated counter
- Dynamic text and image animations
- Video player with custom controls
- Responsive design for mobile and desktop
- Gooey effect on project images (desktop only)
- Magnetic effect on menu items (desktop only)

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- GSAP
- Locomotive Scroll
- Shery.js
- Three.js


## Responsive Design

The website is fully responsive and adapts to both desktop and mobile views. Some features and animations are specifically tailored for each device type to ensure optimal performance and user experience.


## Performance Considerations

- The project uses modern JavaScript features and may require a recent browser version for full compatibility.
- Some heavy animations and effects (like the gooey effect) are disabled on mobile devices to ensure smooth performance.
- Lazy loading techniques are implemented for images and videos to improve initial load times.


## Vendor Prefixes

This project uses vendor prefixes to ensure cross-browser compatibility for CSS properties. Vendor prefixes are included for the following browsers:

- `-webkit-` for Chrome, Safari, newer versions of Opera, and almost all iOS browsers
- `-moz-` for Firefox
- `-ms-` for Internet Explorer and Microsoft Edge
- `-o-` for old versions of Opera

Examples of prefixed properties in the project include:

```css
.element {
  -webkit-transform: translateX(10px);
  -moz-transform: translateX(10px);
  -ms-transform: translateX(10px);
  -o-transform: translateX(10px);
  transform: translateX(10px);
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.