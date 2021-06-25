import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Earn cryptocurrency from your audience"
      description="Earn cryptocurrency from your content and influence while working with brands for paid engagements and content collaborations.Influencers and Content Creators can monetise their audience through live discussions"
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Start a live Podcast</h3>
        <p style={{ color: COLORS.gray }}>
        Live Anonmyous Podcasts are here! Start your Anonmyous Podcast on Anonbee App and grow your audience through interactive discussions.
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
