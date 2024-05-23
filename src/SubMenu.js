import React, { useState } from 'react';

const SubMenu = ({ userMetrics, handleMetricClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(userMetrics.length > 0 ? userMetrics[0] : null);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (metric) => {
    handleMetricClick(metric.id);
    setSelectedMetric(metric);
    setIsOpen(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button className='button' style={{ marginRight: 'auto' }}>Criar nova meta</button>

      <button className='button' style={{ marginLeft: 'auto' }}>Criar nova meta</button>
      
      <div style={{ position: 'relative', width: 'auto' }}>
        <button className='button' onClick={toggleSubMenu}>
          {selectedMetric ? selectedMetric.metric_name : (userMetrics.length > 0 ? userMetrics[0].metric_name : 'Nome da meta')} 
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed">
            <path d="M288-600v-72h528v72H288Zm0 156v-72h528v72H288Zm0 156v-72h528v72H288ZM180-600q-14 0-25-11t-11-25.5q0-14.5 11-25t25.5-10.5q14.5 0 25 10.35T216-636q0 14-10.35 25T180-600Zm0 156q-14 0-25-11t-11-25.5q0-14.5 11-25t25.5-10.5q14.5 0 25 10.35T216-480q0 14-10.35 25T180-444Zm0 156q-14 0-25-11t-11-25.5q0-14.5 11-25t25.5-10.5q14.5 0 25 10.35T216-324q0 14-10.35 25T180-288Z"/>
          </svg>
        </button>
        {isOpen && (
          <div style={{ position: 'absolute', top: '100%', left: 5 }}>
            {userMetrics.map(metric => (
              <button key={metric.id} className='OptionButton' onClick={() => handleOptionClick(metric)}>
                {metric.metric_name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubMenu;
