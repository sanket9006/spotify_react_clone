import React from 'react'
import { useDataLayerValue } from './DataLayer'

function Players() {
    const [{ token, user }, dispatch] = useDataLayerValue();

    return (
        <div>
            <h2>Welcome</h2>
            {/* {      console.log("🆎 Called in Player")}
            {      console.log("🅰 " + token)}
            {    console.log("🅱 " + user)} */}
        </div>
    )
}

export default Players
