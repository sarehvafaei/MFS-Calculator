// src/components/PadFoundationCalculator.js
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { calculatePadFoundation } from '../utils/calculateFoundation';

const PadFoundationCalculator = ({ onResults }) => {
  const formik = useFormik({
    initialValues: {
      appliedLoad: '',
      soilBearingCapacity: '',
      safetyFactor: 1.5,
    },
    validationSchema: Yup.object({
      appliedLoad: Yup.number().required('Required').positive(),
      soilBearingCapacity: Yup.number().required('Required').positive(),
      safetyFactor: Yup.number().required('Required').min(1),
    }),
    onSubmit: (values) => {
      const results = calculatePadFoundation(values);
      onResults(results);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Applied Load (kN)</label>
      <input type="number" {...formik.getFieldProps('appliedLoad')} />
      {formik.errors.appliedLoad ? <div>{formik.errors.appliedLoad}</div> : null}

      <label>Soil Bearing Capacity (kN/m²)</label>
      <input type="number" {...formik.getFieldProps('soilBearingCapacity')} />
      {formik.errors.soilBearingCapacity ? <div>{formik.errors.soilBearingCapacity}</div> : null}

      <label>Safety Factor</label>
      <input type="number" {...formik.getFieldProps('safetyFactor')} />
      {formik.errors.safetyFactor ? <div>{formik.errors.safetyFactor}</div> : null}

      <button type="submit">Calculate Pad Foundation</button>
    </form>
  );
};

export default PadFoundationCalculator;
