 $(document).ready(function(){
    $('.carousel').slick({
       slidesToShow: 4,
       slidesToScroll: 1,
       autoplay: false,
       autoplaySpeed: 2000,
       arrows: true,
       infinite: false,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  $(document).ready(function () {
    $('.main-carousel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
//--------------------- Scroll to top JS--------------//
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const shareButton = document.getElementById("shareButton");
  const socialIcons = document.querySelector(".socialIcons");

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", scrollToTop);
  }

  if (shareButton && socialIcons) {
    shareButton.addEventListener("click", function() {
      socialIcons.classList.toggle("hidden");
    });
  }
});
if (window.matchMedia("(max-width: 767px)").matches) {
  /* the viewport is less than 768 pixels wide */
  $('.stats-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: true,
  });
}
document.addEventListener("DOMContentLoaded", function() {
  // Custom URL to be used if the src is blank
  const customUrl = "https://cdn.shopify.com/s/files/1/0586/5812/7977/files/placeholder.svg?v=1717588324";
  
  // Function to check and update image src
  function updateImages() {
      // Get all image elements within image-element tags
      const imageElements = document.querySelectorAll("image-element img");
      
      imageElements.forEach(function(img) {
          // Check if the src attribute is blank or equals the current page URL (which happens when src is empty)
          if (!img.getAttribute('src') || img.getAttribute('src').trim() === "" || img.src === window.location.href) {
              // Set the src attribute to the custom URL
              img.setAttribute('src', customUrl);
              // Add the placeholder-image class to the class list
              img.classList.add("placeholder-image");
          }
      });
  }
  
  // Check immediately on load
  updateImages();
  
  // Set interval to check every 2 seconds
  setInterval(updateImages, 2000); // 2000 milliseconds = 2 seconds
});


// For Menu Collection images custom code

document.addEventListener('DOMContentLoaded', function() {
  var containers = document.querySelectorAll('.collection_image');

  containers.forEach(function(container) {
    var collectionHandle = container.getAttribute('data-collection-handle');

    // Fetch the collection data
    fetch('/collections/' + collectionHandle + '.json')
      .then(response => response.json())
      .then(data => {
        
        if (data.collection.image) {
          // If the collection has an image, use it
          var imageUrl = data.collection.image.src;
          container.innerHTML = '<img src="' + imageUrl + '" alt="' + collectionHandle + '">';
        } else {
          // If the collection doesn't have an image, use a placeholder
          container.innerHTML = '<img src="https://cdn.shopify.com/s/files/1/0586/5812/7977/files/placeholder.svg?v=1717588324" alt="Placeholder" class="placeholder">';
        }
      })
      .catch(error => console.error('Error fetching collection data:', error));
  });
});

function replaceImageSrc() {
  document.querySelectorAll('img[src="https://cdn.shopify.com/s/images/admin/no-image-large.gif"]').forEach(img => {
      img.src = 'https://cdn.shopify.com/s/files/1/0586/5812/7977/files/placeholder.svg?v=1717588324';
      img.classList.add("placeholder-image");
  });

  document.querySelectorAll('a[data-product_image="https://cdn.shopify.com/s/images/admin/no-image-large.gif"]').forEach(a => {
      a.setAttribute('data-product_image', 'https://cdn.shopify.com/s/files/1/0586/5812/7977/files/placeholder.svg?v=1717588324');
      img.classList.add("placeholder-image");
  });
}

// Set the interval to 5 seconds (5000 milliseconds)
setInterval(replaceImageSrc, 100);