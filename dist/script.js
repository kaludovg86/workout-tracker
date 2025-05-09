const workouts = {
  monday: {
    name: "Strength (Lower Body + Core)",
    exercises: [
      { name: "Glute Bridge (Weighted)", sets: 3, reps: 12, weight: 0, notes: "Neutral spine, pause 1s at top.", videoLink: "https://www.youtube.com/watch?v=6Q0Z1gEs2hA" },
      { name: "Romanian Deadlift (Dumbbells)", sets: 3, reps: 10, weight: 0, notes: "Hinge at hips, keep back straight.", videoLink: "https://www.youtube.com/watch?v=JCXUYuzwNrM" },
      { name: "Plank with Shoulder Tap", sets: 3, reps: 20, weight: 0, notes: "Brace core, minimize hip sway.", videoLink: "https://www.youtube.com/watch?v=wnS1fg1T4SA" },
      { name: "Side Plank (Knees Bent)", sets: 2, reps: "20s/side", weight: 0, notes: "Progress to full side plank.", videoLink: "https://www.youtube.com/watch?v=1K39HnxN1ms" }
    ]
  },
  tuesday: {
    name: "HIIT + Plyometrics",
    exercises: [
      { name: "Bodyweight Squat Jumps", sets: 3, reps: 40, weight: 0, notes: "Soft landing, knee-friendly.", videoLink: "https://www.youtube.com/watch?v=U4BS9ENZq80" },
      { name: "Mountain Climbers", sets: 3, reps: 40, weight: 0, notes: "Fast, brace core, avoid spine flexion.", videoLink: "https://www.youtube.com/watch?v=nmwgirgXLYM" },
      { name: "Incline Push-Ups", sets: 3, reps: 40, weight: 0, notes: "Hands on bench, neutral spine.", videoLink: "https://www.youtube.com/watch?v=7qHvi5d9v5Q" },
      { name: "Step-Ups", sets: 3, reps: 40, weight: 0, notes: "Alternate legs, controlled.", videoLink: "https://www.youtube.com/watch?v=kmz3j6L-6c4" }
    ]
  },
  wednesday: {
    name: "Strength (Upper Body + Core)",
    exercises: [
      { name: "Dumbbell Bench Press (Floor)", sets: 3, reps: 12, weight: 0, notes: "Lie on floor, spine-neutral.", videoLink: "https://www.youtube.com/watch?v=8g09Y2NaWCM" },
      { name: "Seated Dumbbell Shoulder Press", sets: 3, reps: 10, weight: 0, notes: "Core braced.", videoLink: "https://www.youtube.com/watch?v=3ml7fUhr4r8" },
      { name: "Resistance Band Rows", sets: 3, reps: 15, weight: 0, notes: "Pull to hips, neutral spine.", videoLink: "https://www.youtube.com/watch?v=RBmV-AQ9m0A" },
      { name: "Dead Bug", sets: 3, reps: 12, weight: 0, notes: "Slow, press lower back to floor.", videoLink: "https://www.youtube.com/watch?v=3V9nYp3z3v4" }
    ]
  },
  thursday: {
    name: "Active Recovery/Mobility",
    exercises: [
      { name: "McGill Big 3", sets: 1, reps: 10, weight: 0, notes: "Curl-Up, Bird-Dog, Side Plank.", videoLink: "https://www.youtube.com/watch?v=2_fz6fEGlcA" },
      { name: "Hip Flexor Stretch", sets: 2, reps: "30s/side", weight: 0, notes: "Avoid nerve pain.", videoLink: "https://www.youtube.com/watch?v=3iCfbX98t1A" },
      { name: "Thread-the-Needle", sets: 1, reps: 10, weight: 0, notes: "Thoracic mobility.", videoLink: "https://www.youtube.com/watch?v=8jQJ3d2vKqM" },
      { name: "Couch Stretch", sets: 1, reps: "30s/side", weight: 0, notes: "Quad/hip flexor relief.", videoLink: "https://www.youtube.com/watch?v=0jMe6o2UyxY" }
    ]
  },
  friday: {
    name: "HIIT + Plyometrics",
    exercises: [
      { name: "Skater Jumps (Low Impact)", sets: 3, reps: 40, weight: 0, notes: "Step side-to-side, minimal jump.", videoLink: "https://www.youtube.com/watch?v=ZmHHa6mp-tw" },
      { name: "Burpees (No Jump)", sets: 3, reps: 40, weight: 0, notes: "Step up/down, brace core.", videoLink: "https://www.youtube.com/watch?v=TU8QYVW0gDU" },
      { name: "Dumbbell Thrusters", sets: 3, reps: 40, weight: 0, notes: "Light weight, controlled.", videoLink: "https://www.youtube.com/watch?v=1pC2hJ2XgJI" },
      { name: "Plank Jacks", sets: 3, reps: 40, weight: 0, notes: "Keep spine neutral.", videoLink: "https://www.youtube.com/watch?v=3fQ0t2v9NJI" }
    ]
  },
  saturday: {
    name: "Strength (Full Body + Core)",
    exercises: [
      { name: "Goblet Squat (Dumbbell)", sets: 3, reps: 12, weight: 0, notes: "Hold at chest, neutral spine.", videoLink: "https://www.youtube.com/watch?v=rvGzvF4GfYk" },
      { name: "Dumbbell Single-Arm Row", sets: 3, reps: 10, weight: 0, notes: "Brace core.", videoLink: "https://www.youtube.com/watch?v=pYcpY20QaE8" },
      { name: "Kettlebell Swing (Light)", sets: 3, reps: 15, weight: 0, notes: "Hinge at hips, avoid overextension.", videoLink: "https://www.youtube.com/watch?v=TS-fW0y3Ygo" },
      { name: "Pallof Press (Band)", sets: 2, reps: 12, weight: 0, notes: "Slow, resist rotation.", videoLink: "https://www.youtube.com/watch?v=khU1yT8lpuU" }
    ]
  },
  sunday: {
    name: "Active Recovery/Mobility",
    exercises: [
      { name: "90/90 Hip Mobility Drill", sets: 1, reps: 10, weight: 0, notes: "Smooth transitions.", videoLink: "https://www.youtube.com/watch?v=6Q0Z1gEs2hA" },
      { name: "Seated Spinal Rotation", sets: 1, reps: 10, weight: 0, notes: "Gentle, stop if painful.", videoLink: "https://www.youtube.com/watch?v=3iCfbX98t1A" },
      { name: "Glute Stretch (Figure-4)", sets: 1, reps: "30s/side", weight: 0, notes: "Relax into stretch.", videoLink: "https://www.youtube.com/watch?v=8jQJ3d2vKqM" },
      { name: "Light Walk", sets: 1, reps: "10 min", weight: 0, notes: "Brisk pace.", videoLink: "https://www.youtube.com/watch?v=0jMe6o2UyxY" }
    ]
  }
};

// Initialize
const workoutDaySelect = document.getElementById("workout-day");
const workoutDetails = document.getElementById("workout-details");
const logWorkoutBtn = document.getElementById("log-workout");
const historyDiv = document.getElementById("history");
const requestNotificationBtn = document.getElementById("request-notification");

// Load Workout
function loadWorkout(day) {
  const workout = workouts[day];
  workoutDetails.innerHTML = `
    <h2 class="text-lg font-semibold">${workout.name}</h2>
    <div class="space-y-2">
      ${workout.exercises.map((ex, index) => `
        <div class="exercise-card bg-white p-4 rounded shadow">
          <p><strong>${ex.name}</strong>: ${ex.sets} sets x ${ex.reps} reps</p>
          <p class="text-sm text-gray-600">${ex.notes}</p>
          <p><a href="${ex.videoLink}" target="_blank" class="text-blue-500 underline">Watch Demo Video</a></p>
          <input type="number" id="weight-${index}" class="w-full p-2 border rounded mt-2" placeholder="Weight (kg)" step="0.5">
          <textarea id="notes-${index}" class="w-full p-2 border rounded mt-2" placeholder="Notes (e.g., pain, form)"></textarea>
        </div>
      `).join("")}
    </div>
  `;
}

// Log Workout
logWorkoutBtn.addEventListener("click", () => {
  const day = workoutDaySelect.value;
  const workout = workouts[day];
  const log = {
    date: new Date().toISOString(),
    day: day,
    exercises: workout.exercises.map((ex, index) => ({
      name: ex.name,
      sets: ex.sets,
      reps: ex.reps,
      weight: document.getElementById(`weight-${index}`).value || 0,
      notes: document.getElementById(`notes-${index}`).value || ""
    }))
  };

  // Save to localStorage
  const history = JSON.parse(localStorage.getItem("workoutHistory") || "[]");
  history.push(log);
  localStorage.setItem("workoutHistory", JSON.stringify(history));

  alert("Workout logged!");
  loadHistory();
  updateChart();
});

// Load History
function loadHistory() {
  const history = JSON.parse(localStorage.getItem("workoutHistory") || "[]");
  historyDiv.innerHTML = history.length ? history.map(log => `
    <div class="bg-white p-4 rounded shadow">
      <p><strong>${new Date(log.date).toLocaleDateString()}</strong>: ${log.name}</p>
      <ul class="list-disc pl-5">
        ${log.exercises.map(ex => `
          <li>${ex.name}: ${ex.sets}x${ex.reps}, ${ex.weight}kg - ${ex.notes || "No notes"}</li>
        `).join("")}
      </ul>
    </div>
  `).join("") : "<p>No workouts logged yet.</p>";
}

// Progress Chart
let chart;
function updateChart() {
  const history = JSON.parse(localStorage.getItem("workoutHistory") || "[]");
  const labels = history.map(log => new Date(log.date).toLocaleDateString());
  const exerciseWeights = {};

  history.forEach(log => {
    log.exercises.forEach(ex => {
      if (!exerciseWeights[ex.name]) exerciseWeights[ex.name] = [];
      exerciseWeights[ex.name].push(parseFloat(ex.weight) || 0);
    });
  });

  const datasets = Object.keys(exerciseWeights).map(name => ({
    label: name,
    data: exerciseWeights[ex.name],
    borderColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
    fill: false
  }));

  if (chart) chart.destroy();
  chart = new Chart(document.getElementById("progress-chart"), {
    type: "line",
    data: { labels, datasets },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true, title: { display: true, text: "Weight (kg)" } } }
    }
  });
}

// Notifications
requestNotificationBtn.addEventListener("click", () => {
  Notification.requestPermission().then(perm => {
    if (perm === "granted") {
      alert("Notifications enabled! You'll get daily reminders.");
      scheduleNotifications();
    }
  });
});

function scheduleNotifications() {
  const now = new Date();
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  days.forEach((day, index) => {
    const reminderTime = new Date(now);
    reminderTime.setDate(now.getDate() + ((index - now.getDay() + 7) % 7));
    reminderTime.setHours(7, 0, 0, 0); // 7 AM
    const timeUntil = reminderTime - now;
    if (timeUntil > 0) {
      setTimeout(() => {
        new Notification(`Time for ${workouts[day].name}!`, {
          body: "Check your workout plan and log your session."
        });
      }, timeUntil);
    }
  });
}

// Event Listeners
workoutDaySelect.addEventListener("change", () => loadWorkout(workoutDaySelect.value));
loadWorkout("monday");
loadHistory();
updateChart();
