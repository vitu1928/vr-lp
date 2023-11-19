
export default function manifest() {
  return {
    "name": "VR Currículo",
    "short_name": "VR",
    "description": "Landing page para o orçamento de currículos",
    "scope": "/",
    "start_url": "/",
    "id": "/",
    "orientation": "portrait",
    "purpose": "any maskable",
    "theme_color": "#C5C471",
    "background_color": "#D7DEEA",
    "display": "standalone",
    "screenshots" : [
      {
        "src": "Images/Screenshots/highlights.png",
        "sizes": "1572x923",
        "type": "image/png",
        "label": "Destaques do site",
        "form_factor": "wide"
      },
      {
        "src": "Images/Screenshots/epilogue.png",
        "sizes": "922x686",
        "type": "image/png",
        "label": "Epílogo do site", 
      },
      {
        "src": "Images/Screenshots/hero.png",
        "sizes": "1515x922",
        "type": "image/png",
        "label": "Parallax do site",
      }
    ],
    "icons":[
      {
        "src": "favicon.ico",
        "sizes": "48x48",
        "type": "image/x-icon"
      },
      {
        "src": "Images/Icons/VR_128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "Images/Icons/VR_256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "Images/Icons/VR_512.png",
        "sizes": "512X512",
        "type": "image/png"
      }
    ]
  }
}