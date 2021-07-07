const amqp = require('amqplib');

connect();

async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();

    await channel.assertQueue("jobs");

    channel.consume("jobs", (message) => {
      console.log("message consumed")

      const input = JSON.parse(message.content.toString());

      console.log(`received job with input number ${input.number}`)

      if (input.number == 11) {
        channel.ack(message)
      }
    })

    console.log("Waiting for messages")

  } catch (exception) {
    console.error(exception)
  }
}
