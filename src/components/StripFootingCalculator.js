// src/components/StripFootingCalculator.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { calculateStripFooting } from '../utils/calculateFoundation';

const StripFootingCalculator = ({ onResults }) => {
  const formik = useFormik({
    initialValues: {
      wallLoad: '',
      soilBearingCapacity: '',
      safetyFactor: 1.5,
    },
    validationSchema: Yup.object({
      wallLoad: Yup.number().required('Required').positive(),
      soilBearingCapacity: Yup.number().required('Required').positive(),
      safetyFactor: Yup.number().required('Required').min(1),
    }),
    onSubmit: (values) => {
      const results = calculateStripFooting(values);
      onResults(results);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Wall Load (kN/m)</label>
      <input type="number" {...formik.getFieldProps('wallLoad')} />
      {formik.errors.wallLoad ? <div>{formik.errors.wallLoad}</div> : null}

      <label>Soil Bearing Capacity (kN/m²)</label>
      <input type="number" {...formik.getFieldProps('soilBearingCapacity')} />
      {formik.errors.soilBearingCapacity ? <div>{formik.errors.soilBearingCapacity}</div> : null}

      <label>Safety Factor</label>
      <input type="number" {...formik.getFieldProps('safetyFactor')} />
      {formik.errors.safetyFactor ? <div>{formik.errors.safetyFactor}</div> : null}

      <button type="submit">Calculate Strip Footing</button>
    </form>
  );
};

export default StripFootingCalculator;
