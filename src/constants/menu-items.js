import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { FaTwitter, FaYoutube } from "react-icons/fa"

export const mainMenuItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/#about",
    title: "about",
  },
  {
    path: "/#packages",
    title: "packages",
  },
  {
    path: "/#contact",
    title: "contact",
  },
]

export const socialMenuItems = [
  {
    icon: <FaYoutube />,
    url: "https://www.youtube.com/channel/UC3UfpC2SvjdMRi3LtTDBJbe",
    name: "YouTube",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/RTK222_",
    name: "Twitter",
  },
  {
    icon: <DiGithubBadge />,
    url: "https://github.com/RTK222",
    name: "GitHub",
  },
]

export const footerMenuItems = [
]
