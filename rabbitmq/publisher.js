const amqp = require('amqplib');

connect();

async function connect() {
  try {
    const msg = {number: process.argv[2]}
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel()
    await channel.assertQueue('jobs')
    channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)))
    console.log(`Job sent successfully ${msg.number}`)


  } catch (exception) {
    console.error(exception)
  }
}
