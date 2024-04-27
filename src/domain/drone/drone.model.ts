import {UUID} from "node:crypto";

export interface Drone {
  id: UUID,
  name: string,
  serialNumber: string,
  model: string,
  weight: number,
  maxSpeed: number,
  maxFlightTime: number,
  maxRange: number,
  batteryCapacity: number,
  state: DroneState,
  currentCharge: number
}

export enum DroneState {
  IDLE,
  FLYING,
  DELIVERING,
  RETURNING,
  HIBERNATING,
  CHARGING,
  CHARGED
}
