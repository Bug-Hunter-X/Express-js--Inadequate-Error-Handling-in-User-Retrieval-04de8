const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUserById(userId, (err, user) => {
    if (err) {
      // This will cause a 500 error without details
      console.error(err);
      res.status(500).send('Server Error');
    } else if (!user) {
      // Respond with a 404 error
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});
app.listen(3000, () => console.log('Server started on port 3000'));