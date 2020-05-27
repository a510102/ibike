import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import bikeMark from './icon/bikeMark.svg';
import './bikeMap.css'

const bikeIcon = new Icon({
    iconUrl: bikeMark,
    iconSize: [50, 50],
})

function BikeMap({ Markstep, CAddress }) {
    return (
        <Map center={Markstep} zoom={18} className="map">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
            <Marker position={Markstep} icon={bikeIcon} >
                <Popup>
                    {CAddress}
                </Popup>
            </Marker>
            <button className="closemap">X</button>
        </Map>
    )
}

export default BikeMap;