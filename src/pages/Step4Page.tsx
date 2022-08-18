import React from "react"

export const Step4Page: React.FC = () => {
  return (
    <div className="container bg_green">
      <div className="area_guage">
        <button type="button" className="fuel_guage"></button>
        <span className="tick bg_red" />
        <span className="tick" />
        <span className="tick bg_red" />
        <span className="tick" />
        <span className="tick bg_red" />
      </div>
    </div>
  )
}
