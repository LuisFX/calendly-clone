var event = {
    name: "Patient Appointment",
    organizer: "Dr. Smith Wesson",
    duration: 15,
    description: "Your appointment will be confirmed via email upon review.",
    date: new Date(),
    time: "9:00",
    attendees: []
};

sessionStorage.setItem("eventObj", JSON.stringify(event));