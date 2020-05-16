import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

import { setUserLocationRequest } from '~/store/modules/dev/actions';

export default function ModalSettings({ show, onHide }) {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.dev.profile.location);
  const maxDistanceSetted = useSelector(
    (state) =>
      state.dev.profile.location && state.dev.profile.location.maxDistance
  );

  const [maxDistance, setMaxDistance] = useState(10000);

  useEffect(() => {
    function onEscKeyDown(event) {
      if (event.keyCode === 27) {
        onHide();
      }
    }

    document.addEventListener('keydown', onEscKeyDown);

    return () => {
      document.removeEventListener('keydown', onEscKeyDown);
    };
  }, [onHide]);

  useEffect(() => {
    setMaxDistance(
      maxDistanceSetted === undefined || maxDistanceSetted === null
        ? 10000
        : maxDistanceSetted
    );
  }, [maxDistanceSetted]);

  function handleLocationSettings() {
    dispatch(
      setUserLocationRequest(
        true,
        maxDistance,
        location.coordinates[0],
        location.coordinates[1]
      )
    );
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Location Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>Adjust the distance for searches over a larger area.</span>
        <RangeSlider
          value={maxDistance}
          onChange={(event) => setMaxDistance(Number(event.target.value))}
          min={10000}
          max={80000}
          step={5000}
          variant="secondary"
          size="lg"
          tooltip="on"
          tooltipLabel={(currentValue) => `${currentValue}km`}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleLocationSettings} variant="success">
          Save
        </Button>
        <Button onClick={onHide} variant="light">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ModalSettings.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
};

ModalSettings.defaultProps = {
  show: false,
};
