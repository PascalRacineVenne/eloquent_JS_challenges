const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
  const graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

const VillageState = class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      const parcels = this.parcels.map(p => {
        if (p.place !== this.place) return p;
        return { place: destination, address: p.address };
      }).filter(p => p.place !== p.address);
      return new VillageState(destination, parcels);
    }
  }
};

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length === 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    const action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  const choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function(parcelCount = 5) {
  const parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    const address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place === address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length === 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
  const work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    const { at, route } = work[i];
    for (let place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some(w => w.at === place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}


function goalOrientedRobot({ place, parcels }, route) {
  if (route.length === 0) {
    const parcel = parcels[0];
    if (parcel.place !== place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

// Variation of run robots
// You’ll have to write a variant of the runRobot function that,
// instead of logging the events to the console,
// returns the number of steps the robot took to complete the task.

function stepsNumber(state, robot, memory) {
  for (let steps = 0; ; steps++) {
    if (state.parcels.length === 0) return steps;
    const action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

// Write a function compareRobots that takes two robots (and their starting memory).
// It should generate 100 tasks and let each of the robots solve each of these tasks.
// When done, it should output the average number of steps each robot took per task.

function compareRobots(robot1, memory1, robot2, memory2) {
  let result1 = 0;
  let result2 = 0;
  for (let i = 0; i < 100; i++) {
    const state = VillageState.random();
    result1 += stepsNumber(state, robot1, memory1);
    result2 += stepsNumber(state, robot2, memory2);
  }
  console.log(`Robot 1 average number of steps per task is : ${result1 / 100} steps`);
  console.log(`Robot 2 average number of steps per task is : ${result2 / 100} steps`);
}

// compareRobots(routeRobot, [], goalOrientedRobot, []);

// Can you write a robot that finishes the delivery task faster than goalOrientedRobot?
// If you observe that robot’s behavior, what obviously stupid things does it do?
// How could those be improved?
function improvedRobot({ place, parcels }, route) {
  if (route.length === 0) {

  } else {

  }
};

runRobotAnimation(VillageState.random(), improvedRobot, []);
