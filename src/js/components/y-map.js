import * as ymaps3 from 'ymaps3'
import markerImg from '@/assets/img/y-map/y-map-marker.svg'

const mapContainer = document.getElementById('y-map-container')

async function initMap () {
    // Дождитесь резолва`ymaps3.ready`
    await ymaps3.ready
    const location = [39.841338, 54.728793]

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3

    // Карта инициализируется во втором контейнере
    const map = new YMap(mapContainer, {
        location: { center: location, zoom: 14 }
    })
    map.addChild(new YMapDefaultSchemeLayer())

    map.addChild(new YMapDefaultFeaturesLayer())
    const polyanaMarker = document.createElement('img')
    polyanaMarker.className = 'polyana-marker'
    polyanaMarker.src = markerImg
    polyanaMarker.onclick = () =>
        map.update({ location: { center: location, duration: 400 } })
    map.addChild(new YMapMarker({
        coordinates: location
    }, polyanaMarker))
}

initMap()
