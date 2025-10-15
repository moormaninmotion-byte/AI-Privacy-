
import React from 'react';
import { Section } from '../components/Section';
import { CodeBlock } from '../components/CodeBlock';
import { CODE_SAMPLES } from '../constants';

export const CodeSamplesSection: React.FC = () => {
  return (
    <Section
      id="code-samples"
      title="Implementation Snippets"
      subtitle="See how these privacy concepts translate into code. These samples demonstrate key components from popular libraries like TensorFlow Privacy and PySyft."
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
            <h3 className="text-xl font-bold text-brand-secondary mb-2">Differential Privacy with TensorFlow</h3>
            <p className="text-text-secondary mb-4 text-sm">
                This example shows how to replace a standard Keras optimizer with a differentially private version. The `DPKerasAdamOptimizer` automatically clips gradients and adds noise during training to provide privacy guarantees.
            </p>
            <CodeBlock code={CODE_SAMPLES.dp_tensorflow.trim()} language="python" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-brand-secondary mb-2">Conceptual Federated Learning with PySyft</h3>
            <p className="text-text-secondary mb-4 text-sm">
                This snippet illustrates the core idea of Federated Averaging. A model is copied to virtual 'workers', trained on their private data (in a real scenario), and then the resulting models are aggregated on a central server.
            </p>
            <CodeBlock code={CODE_SAMPLES.fl_pysyft.trim()} language="python" />
        </div>
      </div>
    </Section>
  );
};
