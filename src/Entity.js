import PropTypes from "prop-types";
import { Entity as CesiumEntity } from "cesium";

import CesiumComponent from "./CesiumComponent";
import { entityCollectionType } from "./types";

export default class Entity extends CesiumComponent {

  static propTypes = {
    ...CesiumComponent.propTypes,
    availability: PropTypes.any,
    billboard: PropTypes.any,
    box: PropTypes.any,
    corridor: PropTypes.any,
    cylinder: PropTypes.any,
    description: PropTypes.any,
    ellipse: PropTypes.any,
    ellipsoid: PropTypes.any,
    id: PropTypes.string,
    label: PropTypes.any,
    model: PropTypes.any,
    name: PropTypes.any,
    onDefinitionChanged: PropTypes.func,
    orientation: PropTypes.any,
    parent: PropTypes.any,
    path: PropTypes.any,
    plane: PropTypes.any,
    point: PropTypes.any,
    polygon: PropTypes.any,
    polyline: PropTypes.any,
    polylineVolume: PropTypes.any,
    position: PropTypes.any,
    properties: PropTypes.any,
    rectangle: PropTypes.any,
    show: PropTypes.any,
    viewFrom: PropTypes.any,
    wall: PropTypes.any
  }

  static contextTypes = {
    entityCollection: entityCollectionType
  }

  static cesiumProps = [
    "availability",
    "show",
    "description",
    "position",
    "orientation",
    "viewFrom",
    "parent",
    "billboard",
    "box",
    "corridor",
    "cylinder",
    "ellipse",
    "ellipsoid",
    "label",
    "model",
    "name",
    "path",
    "plane",
    "point",
    "polygon",
    "polyline",
    "properties",
    "polylineVolume",
    "rectangle",
    "wall"
  ]

  static cesiumReadOnlyProps = [
    "id"
  ]

  static cesiumEvents = [
    "definitionChanged"
  ]

  get parent() {
    const { entityCollection } = this.context;
    if (entityCollection) {
      return entityCollection;
    }
    return null;
  }

  createCesiumElement(options) {
    return new CesiumEntity(options);
  }

  mountCesiumElement(entity) {
    this.parent.add(entity);
  }

  destroyCesiumElement(entity) {
    const p = this.parent;
    if (p) {
      p.remove(entity);
    }
  }

}
