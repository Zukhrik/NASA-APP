export type astronomyPicOfTheDay = {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

export type Asteroid = {
  absolute_magnitude_h: number
  close_approach_data: []
  designation: string
  estimated_diameter: {}
  id: string
  is_potentially_hazardous_asteroid: boolean
  is_sentry_object: boolean
  links: { self: string }
  name: string
  name_limited: string
  nasa_jpl_url: string
  neo_reference_id: string
  orbital_data: {}
}

export type Asteroids = {
  links: {
    next: string
    self: string
  }
  near_earth_objects: Asteroid[]
  page: {
    number: number
    size: number
    total_elements: number
    total_pages: number
  }
}