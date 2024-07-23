import React from 'react'

export default function Alert(props) {
    const capitalifun = (w)=>{
        const t = w.toLowerCase();
        return t.charAt(0).toUpperCase() + t.slice(1);
    }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalifun(props.alert.type)}</strong> : {props.alert.msg}
    </div>
  )
}
