
export const METHODS = {
  fl: {
    title: 'Federated Learning (FL)',
    description: 'A technique where the model is trained on decentralized data without the data ever leaving the user\'s device. Instead of sending raw data to a central server, only the model updates (gradients or weights) are sent. This preserves data locality and privacy.',
    pros: 'Strong privacy as raw data is not shared. Lower latency and power consumption for on-device inference.',
    cons: 'Complex to implement and manage. Susceptible to model inversion and membership inference attacks if not combined with other techniques.'
  },
  dp: {
    title: 'Differential Privacy (DP)',
    description: 'A system is differentially private if an observer seeing its output cannot tell if a particular individual\'s information was used in the computation. This is achieved by adding carefully calibrated statistical noise to the data, model updates, or query results.',
    pros: 'Provides strong, mathematically provable privacy guarantees. Widely studied and adopted.',
    cons: 'Introduces a trade-off between privacy and model accuracy. The added noise can degrade performance.'
  },
  he: {
    title: 'Homomorphic Encryption (HE)',
    description: 'Allows for computation on encrypted data. A third party can perform machine learning computations on data without decrypting it, and thus without ever seeing the raw data. The result, when decrypted by the data owner, is the same as if computed on the plaintext.',
    pros: 'Extremely strong privacy, as data remains encrypted throughout the lifecycle.',
    cons: 'Computationally very expensive and slow, making it impractical for most large-scale ML tasks today.'
  },
  smpc: {
    title: 'Secure Multi-Party Computation (SMPC)',
    description: 'Enables multiple parties to jointly compute a function over their private inputs without revealing those inputs to each other. For example, multiple banks could train a joint fraud detection model without sharing customer transaction data.',
    pros: 'Allows for collaborative model training without a central trusted party.',
    cons: 'High communication overhead between parties. Can be complex to set up and coordinate.'
  }
};

export const USE_CASES = [
  {
    title: 'Healthcare AI',
    description: 'Training diagnostic models on patient data from multiple hospitals without centralizing sensitive health records. Each hospital trains a model locally and shares only anonymized model updates.',
    privacyRequirement: 'High',
    methods: 'Federated Learning, Differential Privacy',
    icon: 'heart'
  },
  {
    title: 'Financial Services',
    description: 'Collaboratively building fraud detection or credit scoring models across different banks. This allows for identifying patterns across the financial system without sharing proprietary customer data.',
    privacyRequirement: 'Very High',
    methods: 'SMPC, Federated Learning',
    icon: 'dollar'
  },
  {
    title: 'On-Device Assistance',
    description: 'Improving keyboard predictions or voice assistant commands by learning from user interactions directly on their phone. The raw text or voice data never leaves the device.',
    privacyRequirement: 'High',
    methods: 'Federated Learning',
    icon: 'mobile'
  },
  {
    title: 'Personalized Content',
    description: 'Aggregating user behavior data to train recommendation engines while protecting individual user identities. Anonymized data with added noise is used to understand general trends.',
    privacyRequirement: 'Medium',
    methods: 'Differential Privacy',
    icon: 'news'
  }
];

export const CODE_SAMPLES = {
  dp_tensorflow: `
import tensorflow as tf
from tensorflow_privacy.privacy.optimizers.dp_optimizer_keras import DPKerasAdamOptimizer

# Original non-private optimizer
optimizer = tf.keras.optimizers.Adam(learning_rate=0.01)

# Differentially Private optimizer
dp_optimizer = DPKerasAdamOptimizer(
    l2_norm_clip=1.0,         # Clip gradients to bound their sensitivity
    noise_multiplier=0.5,     # Amount of noise to add
    num_microbatches=1,       # Process data in smaller batches
    learning_rate=0.01
)

# Model compilation
model.compile(optimizer=dp_optimizer, loss='...', metrics=['...'])

# The rest of the training loop remains the same
# model.fit(...)
`,
  fl_pysyft: `
import syft as sy
import torch as th

# PySyft setup: Create virtual workers representing different devices
hook = sy.TorchHook(th)
alice = sy.VirtualWorker(hook, id="alice")
bob = sy.VirtualWorker(hook, id="bob")

# A simple model
model = th.nn.Linear(2, 1)

# Send model to workers
model_alice = model.copy().send(alice)
model_bob = model.copy().send(bob)

# Training would happen on each worker with their local data (not shown)
# ... train model_alice and model_bob ...

# Federated Averaging: Get models back and average their weights
model_alice.move(hook.local_worker)
model_bob.move(hook.local_worker)

with th.no_grad():
    model.weight.set_(((model_alice.weight.data + model_bob.weight.data) / 2))
    model.bias.set_(((model_alice.bias.data + model_bob.bias.data) / 2))

print("Federated averaging complete. New model weights:", model.weight)
`
};
