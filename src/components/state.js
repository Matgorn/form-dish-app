const state = () => {
  return {
    default: {
      name: '',
      type: 'pizza',
      preparation_time: "00:00:00",
      no_of_slices: '',
      diameter: '',
      spiciness_scale: '',
      slices_of_bread: '',
      error: {
        name: '',
        no_of_slices: '',
        diameter: '',
        spiciness_scale: '',
        slices_of_bread: ''
      }
    },
    conditionals: {
      no_of_slices: '',
      diameter: '',
      spiciness_scale: '',
      slices_of_bread: ''
    }
  }
}

export default state();