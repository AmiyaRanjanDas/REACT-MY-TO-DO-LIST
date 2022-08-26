import React from 'react'

export default function footer({mode}) {
  return (
    <div style={(mode==='Dark Mode')?({background:'rgb(0 64 255)',textAlign:'center',color:'white'}):
    ({background:'rgb(0 32 126)',textAlign:'center',color:'white'})}>
        all rights reserved by @amiyadas<br/>
        contact:9090909090
    </div>
  )
}
