/* This file is automatically rebuilt by the Cesium build process. */
define(['./when-ef0df1c5', './Check-eef37841', './Math-9bc506ad', './Cartesian2-e248b6a8', './Transforms-f7ab23c1', './RuntimeError-0a1a187a', './WebGLConstants-50edbdfc', './ComponentDatatype-5633ad88', './GeometryAttribute-aed2cdaf', './GeometryAttributes-cb2382b3', './IndexDatatype-1715c2a7', './GeometryOffsetAttribute-5a168f5d', './VertexFormat-ab7523e7', './EllipsoidGeometry-a3210b94'], function (when, Check, _Math, Cartesian2, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, GeometryAttributes, IndexDatatype, GeometryOffsetAttribute, VertexFormat, EllipsoidGeometry) { 'use strict';

  function createEllipsoidGeometry(ellipsoidGeometry, offset) {
    if (when.defined(offset)) {
      ellipsoidGeometry = EllipsoidGeometry.EllipsoidGeometry.unpack(ellipsoidGeometry, offset);
    }
    return EllipsoidGeometry.EllipsoidGeometry.createGeometry(ellipsoidGeometry);
  }

  return createEllipsoidGeometry;

});
