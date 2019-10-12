module.exports = async res => {
  const
      statuses = require('./../common/statusesGet'),
      statusesResult = await statuses();

  res.json(statusesResult.rows);
};