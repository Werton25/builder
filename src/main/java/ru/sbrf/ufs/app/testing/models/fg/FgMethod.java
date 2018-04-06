package ru.sbrf.ufs.app.testing.models.fg;

import ru.sbrf.ufs.app.testing.models.Model;

import java.util.Collection;

public class FgMethod {
    private final String name;
    private final FgResponse response;
    private final Collection<Model> requestParameters;

    private FgMethod(String name, FgResponse response, Collection<Model> requestParameters) {
        this.name = name;
        this.response = response;
        this.requestParameters = requestParameters;
    }

    public String getName() {
        return name;
    }

    public FgResponse getResponse() {
        return response;
    }

    public Collection<Model> getRequestParameters() {
        return requestParameters;
    }

    public static class Builder {
        private String name;
        private FgResponse response;
        private Collection<Model> requestParameters;

        public Builder name(String name) {
            this.name = name;

            return this;
        }

        public Builder response(FgResponse response) {
            this.response = response;

            return this;
        }

        public Builder requestParameters(Collection<Model> requestParameters) {
            this.requestParameters = requestParameters;

            return this;
        }

        public FgMethod build() {
            return new FgMethod(name, response, requestParameters);
        }
    }
}
